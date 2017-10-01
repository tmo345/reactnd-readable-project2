// import React, { Component } from 'react';
//
// function forDataType(WrappedComponent, dataSpecificProps) {
//   return class extends React.Component {
//     render() {
//       return <WrappedComponent data={dataSpecificProps} {...this.props} />;
//     }
//   };
// }
// const createModal = (Component, data) => {
//   return (
//     <Component
//       isOpen={data.isOpenBoolean}
//       onRequestClose={data.handleCloseModal}
//       contentLabel={data.contentLabel}
//       style={{
//         overlay: {
//           backgroundColor: 'rgba(0, 0, 0, 0.75)'
//         },
//         content: {
//           top: '10%',
//           bottom: '12.5%',
//           right: '10%',
//           left: '10%',
//           padding: '25px'
//         }
//       }}
//     >
//       {props.children}
//     </Component>
//   );
// };
//
// export default createModal;
