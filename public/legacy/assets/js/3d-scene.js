import * as THREE from 'three';

/* ===== Scene, Camera, Renderer ===== */
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0f172a);
scene.fog = new THREE.Fog(0x0f172a, 8, 20);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 12);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: false,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

const container = document.getElementById('three-container');
if (container) {
  container.appendChild(renderer.domElement);
}

/* ===== Lighting ===== */
const ambientLight = new THREE.AmbientLight(0x334488, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffeedd, 1.8);
directionalLight.position.set(5, 8, 6);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
scene.add(directionalLight);

const fillLight = new THREE.DirectionalLight(0x4466ff, 0.6);
fillLight.position.set(-4, -2, 3);
scene.add(fillLight);

const rimLight = new THREE.DirectionalLight(0x8888ff, 0.4);
rimLight.position.set(0, -5, -5);
scene.add(rimLight);

/* ===== Main Object: Torus Knot ===== */
const torusKnotGeo = new THREE.TorusKnotGeometry(1.6, 0.5, 180, 24);
const torusKnotMat = new THREE.MeshPhysicalMaterial({
  color: 0x6366f1,
  metalness: 0.3,
  roughness: 0.15,
  emissive: 0x4338ca,
  emissiveIntensity: 0.15,
  clearcoat: 0.6,
  clearcoatRoughness: 0.3,
  envMapIntensity: 0.8,
});
const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
torusKnot.castShadow = true;
torusKnot.position.y = 0;
scene.add(torusKnot);

/* Wireframe overlay for torus knot */
const wireframeMat = new THREE.MeshBasicMaterial({
  color: 0x818cf8,
  wireframe: true,
  transparent: true,
  opacity: 0.12,
});
const wireframeOverlay = new THREE.Mesh(torusKnotGeo.clone(), wireframeMat);
wireframeOverlay.position.copy(torusKnot.position);
wireframeOverlay.scale.set(1.01, 1.01, 1.01);
scene.add(wireframeOverlay);

/* ===== Orbiting Geometric Shapes ===== */

/* 1. Icosahedron (glass) */
const icoGeo = new THREE.IcosahedronGeometry(0.7, 0);
const icoMat = new THREE.MeshPhysicalMaterial({
  color: 0x22d3ee,
  metalness: 0.0,
  roughness: 0.05,
  transparent: true,
  opacity: 0.85,
  envMapIntensity: 1.2,
  clearcoat: 0.9,
  clearcoatRoughness: 0.1,
});
const ico = new THREE.Mesh(icoGeo, icoMat);
ico.castShadow = true;
ico.position.set(3.5, 1.5, -1);
scene.add(ico);

/* 2. Octahedron (metallic gold) */
const octGeo = new THREE.OctahedronGeometry(0.65, 0);
const octMat = new THREE.MeshPhysicalMaterial({
  color: 0xf59e0b,
  metalness: 0.85,
  roughness: 0.15,
  emissive: 0xd97706,
  emissiveIntensity: 0.05,
  envMapIntensity: 1.5,
});
const oct = new THREE.Mesh(octGeo, octMat);
oct.castShadow = true;
oct.position.set(-3.2, -1.8, -0.5);
scene.add(oct);

/* 3. Dodecahedron (wireframe pink) */
const dodGeo = new THREE.DodecahedronGeometry(0.75, 0);
const dodMat = new THREE.MeshPhysicalMaterial({
  color: 0xf43f5e,
  metalness: 0.4,
  roughness: 0.3,
  emissive: 0xe11d48,
  emissiveIntensity: 0.08,
  wireframe: true,
});
const dod = new THREE.Mesh(dodGeo, dodMat);
dod.castShadow = true;
dod.position.set(0, -3.2, -2);
scene.add(dod);

/* 4. Small torus ring */
const ringGeo = new THREE.TorusGeometry(0.8, 0.12, 16, 48);
const ringMat = new THREE.MeshPhysicalMaterial({
  color: 0xa78bfa,
  metalness: 0.7,
  roughness: 0.2,
  emissive: 0x7c3aed,
  emissiveIntensity: 0.1,
  transparent: true,
  opacity: 0.7,
});
const ring = new THREE.Mesh(ringGeo, ringMat);
ring.castShadow = true;
ring.position.set(-2.8, 2.5, -2.5);
ring.rotation.x = Math.PI / 3;
ring.rotation.z = Math.PI / 4;
scene.add(ring);

/* ===== Particle Field ===== */
const particleCount = 600;
const particleGeo = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const sizes = new Float32Array(particleCount);
const colors = new Float32Array(particleCount * 3);

const colorPalette = [
  new THREE.Color(0x6366f1),
  new THREE.Color(0x818cf8),
  new THREE.Color(0xa78bfa),
  new THREE.Color(0x22d3ee),
  new THREE.Color(0xf59e0b),
];

for (let i = 0; i < particleCount; i++) {
  const radius = 6 + Math.random() * 8;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);

  positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
  positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
  positions[i * 3 + 2] = radius * Math.cos(phi);

  sizes[i] = 0.02 + Math.random() * 0.06;

  const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  colors[i * 3] = col.r;
  colors[i * 3 + 1] = col.g;
  colors[i * 3 + 2] = col.b;
}

particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
particleGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const particleMat = new THREE.PointsMaterial({
  size: 0.06,
  vertexColors: true,
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  sizeAttenuation: true,
});
const particles = new THREE.Points(particleGeo, particleMat);
scene.add(particles);

/* ===== Mouse Tracking ===== */
const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

document.addEventListener('mousemove', (e) => {
  mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
});

/* ===== Scroll State ===== */
let scrollProgress = 0;

window.addEventListener('scroll', () => {
  const docEl = document.documentElement;
  const scrollTop = window.pageYOffset || docEl.scrollTop || 0;
  const scrollHeight = docEl.scrollHeight - window.innerHeight;
  scrollProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
});

/* ===== Resize Handler ===== */
function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onResize);

/* ===== Animation Loop ===== */
const clock = new THREE.Clock();
const initialPositions = {
  ico: ico.position.clone(),
  oct: oct.position.clone(),
  dod: dod.position.clone(),
  ring: ring.position.clone(),
  torus: torusKnot.position.clone(),
};

function animate() {
  requestAnimationFrame(animate);

  const elapsed = clock.getElapsedTime();

  /* Smooth mouse follow */
  mouse.x += (mouse.targetX - mouse.x) * 0.05;
  mouse.y += (mouse.targetY - mouse.y) * 0.05;

  /* Main torus knot rotation */
  torusKnot.rotation.x = elapsed * 0.2;
  torusKnot.rotation.y = elapsed * 0.3 + mouse.x * 0.3;
  torusKnot.rotation.z = elapsed * 0.1 + mouse.y * 0.2;
  wireframeOverlay.rotation.copy(torusKnot.rotation);

  /* Subtle position shift from mouse */
  torusKnot.position.x = mouse.x * 0.3;
  torusKnot.position.y = mouse.y * 0.2 + Math.sin(elapsed * 0.5) * 0.1;

  /* Orbiting objects */
  ico.position.x = initialPositions.ico.x + Math.sin(elapsed * 0.4 + 0) * 0.3 + mouse.x * 0.4;
  ico.position.y = initialPositions.ico.y + Math.cos(elapsed * 0.35 + 0) * 0.3 + mouse.y * 0.3;
  ico.rotation.x = elapsed * 0.4;
  ico.rotation.y = elapsed * 0.5;

  oct.position.x = initialPositions.oct.x + Math.sin(elapsed * 0.3 + 2) * 0.4 + mouse.x * 0.3;
  oct.position.y = initialPositions.oct.y + Math.cos(elapsed * 0.25 + 2) * 0.4 + mouse.y * 0.2;
  oct.rotation.x = elapsed * 0.3;
  oct.rotation.z = elapsed * 0.5;

  dod.position.x = initialPositions.dod.x + Math.sin(elapsed * 0.2 + 4) * 0.5;
  dod.position.y = initialPositions.dod.y + Math.cos(elapsed * 0.3 + 4) * 0.4 + mouse.y * 0.2;
  dod.rotation.x = elapsed * 0.2;
  dod.rotation.y = elapsed * 0.4;

  ring.position.x = initialPositions.ring.x + Math.sin(elapsed * 0.25 + 1) * 0.3 + mouse.x * 0.2;
  ring.position.y = initialPositions.ring.y + Math.cos(elapsed * 0.3 + 1) * 0.3 + mouse.y * 0.2;
  ring.rotation.z = elapsed * 0.3;
  ring.rotation.y = elapsed * 0.2;

  /* Particles slow rotation */
  particles.rotation.y = elapsed * 0.015;
  particles.rotation.x = Math.sin(elapsed * 0.01) * 0.05;

  /* Scroll-based animation */
  const scrollOffset = scrollProgress * 3;
  camera.position.z = 12 - scrollOffset * 0.3;
  camera.position.y = -scrollOffset * 0.4;

  torusKnot.material.emissiveIntensity = 0.15 + scrollProgress * 0.5;
  torusKnot.scale.setScalar(1 - scrollProgress * 0.15);

  ico.material.opacity = 0.85 - scrollProgress * 0.3;
  ring.material.opacity = 0.7 - scrollProgress * 0.2;

  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}

animate();

/* ===== Cleanup ===== */
export function dispose() {
  renderer.dispose();
  document.removeEventListener('mousemove', null);
  window.removeEventListener('resize', onResize);
}
