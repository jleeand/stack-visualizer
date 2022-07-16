const scence = new THREE.Scene()

let i = 1

let stack = []


const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scence.add(ambientLight);const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(10, 20, 0);
scence.add(dirLight);

const aspect = window.innerWidth / window.innerHeight;
const width = 10;
const height = width / aspect;
const camera = new THREE.OrthographicCamera(
width / -2, // left
width / 2, // right
height / 2, // top
height / -2, // bottom
0, // near plane
100 // far plane
);camera.position.set(4, 4, 4);
camera.lookAt(0, 0, 0);

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scence, camera);

document.body.appendChild(renderer.domElement);


window.addEventListener('click', () => {


    const color = randomColor
    
    const geo2 = new THREE.BoxGeometry(2,1,2)

    let material2
    
    if(i % 2 == 0) {
        material2 = new THREE.MeshLambertMaterial({color: 0x00ffee})
    }

    else {
        material2 = new THREE.MeshLambertMaterial({color: 0xaaffee})
    }


      
    const mesh2 = new THREE.Mesh(geo2, material2)
    mesh2.position.set(-1,i-2,2)
    scence.add(mesh2)
    
    var position = new THREE.Vector3().copy( mesh2.position );
    mesh2.localToWorld( position );
    camera.lookAt( position );


    
    i += 1
    renderer.render(scence, camera);


    stack.push(geo2)
    console.log(stack)


    // scence.remove(mesh2)
    // mesh2.geometry.dispose()
    // mesh2.material.dispose()
    // mesh2 = undefined
    // i -= 1

    // renderer.render(scence, camera)

    



})


const randomColor = () => {
    let color = '0x';
    for (let i = 0; i < 6; i++){
       const random = Math.random();
       const bit = (random * 16) | 0;
       color += (bit).toString(16);
    };
    return color;
 };