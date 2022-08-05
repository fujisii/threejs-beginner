import * as THREE from "three";

let scene, camera, renderer, pointLight;

// シーンを追加
scene = new THREE.Scene();

// カメラを追加
camera = new THREE.PerspectiveCamera(
    50, // 50度の視野角
    window.innerWidth / window.innerHeight, // アスペクト比（画面の横幅と縦幅の比率のこと）
    0.1, // カメラの開始距離
    1000 // カメラの終了距離
);
camera.position.set(0, 0, +500);

// レンダラーを追加
renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);

// ジオメトリ（3Dオブジェクト）を作成
let ballGeometry = new THREE.SphereGeometry(100, 64 ,32);   // 球体のジオメトリ
// マテリアル(材質)を作成
let ballMaterial = new THREE.MeshPhysicalMaterial();    // 光源を必要とするマテリアル
// メッシュ化してみよう
let ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
scene.add(ballMesh);

// 平行光源を追加してみよう
let directionalLight = new THREE.DirectionalLight(0xffffff, 2); // 「0x」とは「これから16進数で書きますよ」という意味
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// ポイント光源を追加してみよう
pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(-200, -200, -200);
scene.add(pointLight);

// レンダリングしてみよう
renderer.render(scene, camera);