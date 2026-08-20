'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ShapeBlurProps {
  className?: string;
  variation?: number;
  pixelRatioProp?: number;
  shapeSize?: number;
  roundness?: number;
  borderSize?: number;
  circleSize?: number;
  circleEdge?: number;
}

const vertexShader = /* glsl */ `
varying vec2 v_texcoord;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    v_texcoord = uv;
}
`;

const fragmentShader = /* glsl */ `
varying vec2 v_texcoord;

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform float u_shapeSize;
uniform float u_roundness;
uniform float u_borderSize;
uniform float u_circleSize;
uniform float u_circleEdge;

#ifndef FNC_COORD
#define FNC_COORD
vec2 coord(in vec2 p) {
    p = p / u_resolution.xy;
    if (u_resolution.x > u_resolution.y) {
        p.x *= u_resolution.x / u_resolution.y;
        p.x += (u_resolution.y - u_resolution.x) / u_resolution.y / 2.0;
    } else {
        p.y *= u_resolution.y / u_resolution.x;
        p.y += (u_resolution.x - u_resolution.y) / u_resolution.x / 2.0;
    }
    p -= 0.5;
    p *= vec2(-1.0, 1.0);
    return p;
}
#endif

#define st0 coord(gl_FragCoord.xy)
#define mx coord(u_mouse * u_pixelRatio)

float sdRoundRect(vec2 p, vec2 b, float r) {
    vec2 d = abs(p - 0.5) * 4.2 - b + vec2(r);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
}

float sdCircle(in vec2 st, in vec2 center) {
    return length(st - center) * 2.0;
}

float fill(float x, float size, float edge) {
    return 1.0 - smoothstep(size - edge, size + edge, x);
}

float strokeAA(float x, float size, float w, float edge) {
    float afwidth = length(vec2(dFdx(x), dFdy(x))) * 0.70710678;
    float d = smoothstep(size - edge - afwidth, size + edge + afwidth, x + w * 0.5)
            - smoothstep(size - edge - afwidth, size + edge + afwidth, x - w * 0.5);
    return clamp(d, 0.0, 1.0);
}

void main() {
    vec2 st = st0 + 0.5;
    vec2 posMouse = mx * vec2(1., -1.) + 0.5;

    float size = u_shapeSize;
    float roundness = u_roundness;
    float borderSize = u_borderSize;
    float circleSize = u_circleSize;
    float circleEdge = u_circleEdge;

    float mouseDist = sdCircle(st, posMouse);
    float sdfCircle = fill(mouseDist, circleSize, circleEdge);
    float sdf = sdRoundRect(st, vec2(size), roundness);

    // Dynamic blur spread
    float blurSpread = mix(0.03, 0.90, pow(sdfCircle, 1.2)); 
    float dynamicBorder = mix(borderSize, borderSize * 3.8, sdfCircle);

    // Garis border utama
    float border = strokeAA(sdf, 0.0, dynamicBorder, blurSpread);

    // Volumetric Spotlight Beam
    float beamCore = fill(mouseDist, circleSize * 0.85, circleEdge * 1.3) * fill(abs(sdf), 0.38, 0.5);
    float totalAlpha = clamp(border + beamCore * 0.95, 0.0, 1.0);

    // WARNA: Gradasi Kombinasi Emerald (#10b981) + Off-White (#F5F0F0)
    vec3 emerald = vec3(0.063, 0.725, 0.506);    // Emerald (#10b981)
    vec3 offWhite = vec3(0.961, 0.941, 0.941);  // Off-White (#F5F0F0)
    vec3 pureWhite = vec3(1.0, 1.0, 1.0);       // High-light Center

    // Mendorong warna Emerald di pinggir pendaran blur, melebur ke Off-White di tengah
    vec3 blurColor = mix(emerald, offWhite, pow(sdfCircle, 0.75));
    vec3 finalColor = mix(blurColor, pureWhite, pow(sdfCircle, 1.5));

    gl_FragColor = vec4(finalColor, totalAlpha);
}
`;

export const ShapeBlur: React.FC<ShapeBlurProps> = ({
  className = '',
  variation = 0,
  pixelRatioProp = 2,
  shapeSize = 1.1,
  roundness = 0.45,
  borderSize = 0.08,
  circleSize = 0.6,
  circleEdge = 0.8,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let active = true;
    let animationFrameId: number;
    let time = 0, lastTime = 0;

    const initialX = mount.clientWidth / 2 || 150;
    const initialY = mount.clientHeight / 2 || 150;

    const vMouse = new THREE.Vector2(initialX, initialY);
    const vMouseDamp = new THREE.Vector2(initialX, initialY);
    const vResolution = new THREE.Vector2();

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera();
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const geo = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_mouse: { value: vMouseDamp },
        u_resolution: { value: vResolution },
        u_pixelRatio: { value: pixelRatioProp },
        u_shapeSize: { value: shapeSize },
        u_roundness: { value: roundness },
        u_borderSize: { value: borderSize },
        u_circleSize: { value: circleSize },
        u_circleEdge: { value: circleEdge },
      },
      defines: { VAR: variation },
      transparent: true,
    });
    materialRef.current = material;

    const quad = new THREE.Mesh(geo, material);
    scene.add(quad);

    const onPointerMove = (e: MouseEvent | PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      vMouse.set(e.clientX - rect.left, e.clientY - rect.top);
    };

    window.addEventListener('mousemove', onPointerMove);

    const resize = () => {
      if (!active || !mount) return;
      const w = mount.clientWidth || 300;
      const h = mount.clientHeight || 300;
      const dpr = Math.min(window.devicePixelRatio, 2);

      renderer.setSize(w, h);
      renderer.setPixelRatio(dpr);

      camera.left = -w / 2;
      camera.right = w / 2;
      camera.top = h / 2;
      camera.bottom = -h / 2;
      camera.updateProjectionMatrix();

      quad.scale.set(w, h, 1);
      vResolution.set(w, h).multiplyScalar(dpr);
      material.uniforms.u_pixelRatio.value = dpr;
    };

    resize();
    window.addEventListener('resize', resize);

    const ro = new ResizeObserver(() => {
      if (active) resize();
    });
    ro.observe(mount);

    const update = () => {
      if (!active) return;
      time = performance.now() * 0.001;
      const dt = time - lastTime;
      lastTime = time;

      vMouseDamp.x = THREE.MathUtils.damp(vMouseDamp.x, vMouse.x, 10, dt);
      vMouseDamp.y = THREE.MathUtils.damp(vMouseDamp.y, vMouse.y, 10, dt);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(update);
    };
 update();

    return () => {
      active = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onPointerMove);
      ro.disconnect();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      geo.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [variation]);

  useEffect(() => {
    const mat = materialRef.current;
    if (!mat) return;
    mat.uniforms.u_pixelRatio.value = pixelRatioProp;
    mat.uniforms.u_shapeSize.value = shapeSize;
    mat.uniforms.u_roundness.value = roundness;
    mat.uniforms.u_borderSize.value = borderSize;
    mat.uniforms.u_circleSize.value = circleSize;
    mat.uniforms.u_circleEdge.value = circleEdge;
  }, [pixelRatioProp, shapeSize, roundness, borderSize, circleSize, circleEdge]);

  return <div className={className} ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ShapeBlur;