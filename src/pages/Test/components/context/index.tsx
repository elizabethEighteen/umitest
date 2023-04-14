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
 import React from 'react';
 import { Table, Avatar ,Button} from '@douyinfe/semi-ui';
 import { IconMore } from '@douyinfe/semi-icons';


 const Index =  function () {
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
 
   const columns = [{title:'title',dataIndex:'title'}]
   const data = [{title:'1111'},{title:'222'}]
 
     return <Table columns={columns} dataSource={data} rowSelection={{}} rowKey = 'title'  />;
   //  return <Button>222222222222222</Button>
 }

 

export default Index
