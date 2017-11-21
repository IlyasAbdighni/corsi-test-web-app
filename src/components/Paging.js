import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

// class Paging extends Component {
//   render() {
//     return (
//       <div>
//         <ul className="pagination">
//           <li className="disabled">
//             <a href="#!">
//               <i className="material-icons">chevron_left</i>
//             </a>
//           </li>
//           <li className="active">
//             <a href="#!">1</a>
//           </li>
//           <li className="waves-effect">
//             <a href="#!">2</a>
//           </li>
//           <li className="waves-effect">
//             <a href="#!">3</a>
//           </li>
//           <li className="waves-effect">
//             <a href="#!">4</a>
//           </li>
//           <li className="waves-effect">
//             <a href="#!">5</a>
//           </li>

//           <li className="waves-effect">
//             <a href="#!">
//               <i className="material-icons">chevron_right</i>
//             </a>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }

class Paging extends Component {
  render() {
    return (
      <div>
        <ul className="pagination">
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={<a href="">...</a>}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </ul>
      </div>
    );
  }
}

export default Paging;
