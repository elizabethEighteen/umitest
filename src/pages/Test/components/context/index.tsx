// import React from 'react';

// let ContextUI = () => {
//   const [num, setNumber] = React.useState(0);
//   const handerClick = () => {
//     for (let i = 0; i < 5; i++) {
//       setTimeout(() => {
//         setNumber(num + 1);
//         console.log(num);
//       }, 1000);
//     }
//   };

//   return <button onClick={handerClick}>{num}</button>;
// };
// export default ContextUI

// import React from "react"

// class Index extends React.Component<any,any>{
//     constructor(props){
//         super(props)
//         this.state={
//             number:0
//         }
//     }
//     handerClick=()=>{
//        for(let i = 0 ;i<5;i++){
//            setTimeout(()=>{
//                this.setState({ number:this.state.number+1 })
//                console.log(this.state.number)
//            },1000)
//        }
//     }

//     render(){
//         return <div>
//             <button onClick={ this.handerClick } >num++</button>

//         </div>
//     }
// }
/**
 * table
 */
// import React from 'react';
// import { Table, Avatar, Button } from '@douyinfe/semi-ui';
// import { IconMore } from '@douyinfe/semi-icons';
// import { DatePicker } from 'antd';

/**
 * three
 */
import { PlusOutlined } from '@ant-design/icons';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useEffect } from 'react';
import fbxPath from './1.fbx'
const Index = function () {
  //  const columns = [
  //      {
  //          title: '标题',
  //          dataIndex: 'name',
  //          width: 400,
  //          render: (text, record, index) => {
  //              return (
  //                  <div>
  //                      <Avatar
  //                          size="small"
  //                          shape="square"
  //                          src={record.nameIconSrc}
  //                          style={{ marginRight: 12 }}
  //                      ></Avatar>
  //                      {text}
  //                  </div>
  //              );
  //          },
  //      },
  //      {
  //          title: '大小',
  //          dataIndex: 'size',
  //      },
  //      {
  //          title: '所有者',
  //          dataIndex: 'owner',
  //          render: (text, record, index) => {
  //              return (
  //                  <div>
  //                      <Avatar size="small" color={record.avatarBg} style={{ marginRight: 4 }}>
  //                          {typeof text === 'string' && text.slice(0, 1)}
  //                      </Avatar>
  //                      {text}
  //                  </div>
  //              );
  //          },
  //      },
  //      {
  //          title: '更新日期',
  //          dataIndex: 'updateTime',
  //      },
  //      {
  //          title: '',
  //          dataIndex: 'operate',
  //          render: () => {
  //              return <IconMore />;
  //          },
  //      },
  //  ];
  //  const data = [
  //      {
  //          key: '1',
  //          name: 'Semi Design 设计稿.fig',
  //          nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png',
  //          size: '2M',
  //          owner: '姜鹏志',
  //          updateTime: '2020-02-02 05:13',
  //          avatarBg: 'grey',
  //      },
  //      {
  //          key: '2',
  //          name: 'Semi Design 分享演示文稿',
  //          nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
  //          size: '2M',
  //          owner: '郝宣',
  //          updateTime: '2020-01-17 05:31',
  //          avatarBg: 'red',
  //      },
  //      {
  //          key: '3',
  //          name: '设计文档',
  //          nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
  //          size: '34KB',
  //          owner: 'Zoey Edwards',
  //          updateTime: '2020-01-26 11:01',
  //          avatarBg: 'light-blue',
  //      },
  //      {
  //          key: '4',
  //          name: 'Semi Pro 设计稿.fig',
  //          nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png',
  //          size: '2M',
  //          owner: '姜鹏志',
  //          updateTime: '2020-02-02 05:13',
  //          avatarBg: 'grey',
  //      },
  //      {
  //          key: '5',
  //          name: 'Semi Pro 分享演示文稿',
  //          nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
  //          size: '2M',
  //          owner: '郝宣',
  //          updateTime: '2020-01-17 05:31',
  //          avatarBg: 'red',
  //      },
  //      {
  //          key: '6',
  //          name: 'Semi Pro 设计文档',
  //          nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
  //          size: '34KB',
  //          owner: 'Zoey Edwards',
  //          updateTime: '2020-01-26 11:01',
  //          avatarBg: 'light-blue',
  //      },
  //  ];
  //  const rowSelection = {
  //      getCheckboxProps: record => ({
  //          disabled: record.name === '设计文档', // Column configuration not to be checked
  //          name: record.name,
  //      }),
  //      onSelect: (record, selected) => {
  //          console.log(`select row: ${selected}`, record);
  //      },
  //      onSelectAll: (selected, selectedRows) => {
  //          console.log(`select all rows: ${selected}`, selectedRows);
  //      },
  //      onChange: (selectedRowKeys, selectedRows) => {
  //          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  //      },
  //  };

  //测试ui --- 表格
  // const columns = [{title:'title',dataIndex:'title'}]
  // const data = [{title:'1111'},{title:'222'}]

  //   return <div>
  //    <Table columns={columns} dataSource={data} rowSelection={{}} rowKey = 'title'  />
  //    <DatePicker></DatePicker>
  //   </div>;
  //  return <Button>222222222222222</Button>

  // 测试three

  useEffect(() => {
    // const canvas = document.querySelector('#three_container');
    // console.log(canvas,'canvas')
    // console.log(THREE,'three')
    // 渲染器
    // const renderer = new THREE.WebGLRenderer({ canvas });
    const container3D = document.getElementById('three_container');
    const divWidth = container3D.clientWidth;
    const divHeight = container3D.clientHeight;
    // const divHeight = 600;
    console.log(divHeight, 'sss');
    //
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // 渲染器
    renderer.setClearColor('#000000', 0.9); // 设置渲染器背景色，也就是canvas背景色， 每次都会清楚画布颜色，重新绘制
    renderer.setSize(divWidth, divHeight); // 渲染器大小
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    document.getElementById('three_container').appendChild(renderer.domElement); // 渲染器添加到元素中
    //
    // 开启阴影
    // renderer.shadowMap.enabled = true;

    const fov = 40; // 视野范围
    const aspect = 2; // 相机默认值 画布的宽高比
    const near = 0.1; // 近平面
    const far = 10000; // 远平面
    // 透视投影相机
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(-1000, 200, 2500);
    camera.lookAt(0, 0, 0);
    // 控制相机
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // 场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x808080);

    {
      // 灯光
      const skyColor = 0xffffff; // 天空 白色
      const groundColor = 0x000000; // 地面 黑色
      const intensity = 1;
      const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
      scene.add(light);
    }
    let dLight = null;
    {
      const light = new THREE.DirectionalLight(0xaaaaaa);
      light.position.set(0, 200, 100);
      light.lookAt(new THREE.Vector3());
      light.shadow.camera.top = 300;
      light.shadow.camera.bottom = -300;
      light.shadow.camera.left = -300;
      light.shadow.camera.right = 300;

      // 开启阴影投射
      // light.castShadow = true;
      dLight = light;
      scene.add(light);
    }
    // loader

    function render(time) {
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    const loader = new FBXLoader();
    console.log(loader, 'loader');
    // const path = require('./zhuti0418_21.fbx')
    loader.load(
      fbxPath,
      function (mesh) {
        console.log(mesh, 'mesh');
        mesh.position.x = mesh.position.x - 400;
        mesh.position.y = mesh.position.y + 200;
        // 设置模型的每个部位都可以投影

        // 设置光线焦点模型
        dLight.target = mesh;
        scene.add(mesh);
        // requestAnimationFrame
        requestAnimationFrame(render);
        // animation();
      },
      function (e) {
      //   console.log(e, 'e');
      },
      function (err) {
        console.log(err, 'er1111r');
      },
    );
  }, []);
  console.log(22222222222222222222111);
  return (
    <div
      style={{
        color: 'red',
        height: '50vh',
        width: '50vw',
        background: 'grey',
      }}
      id="three_container"
    ></div>
  );
};

export default Index;
