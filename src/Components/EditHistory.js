import React from 'react';
import './editHistory.css';

const EditHistory = () => {
  return (
    <div>
        <nav className='inner-nav'>
          <div className='nav-link'>
            <ul>
                <li><a href="#">Edit</a></li>
                <li><a href="#">Delete</a></li>
                <li><a href="#">Add</a></li>
            </ul>
          </div>
        </nav>
        <table>
            <tr>
                <th>Word</th>
                <th>Submitted on</th>
                <th>Submitted By</th>
                <th>Status</th>
                <th>Responded on</th>
            </tr>
            <tr>
                <td>Pumpkin</td>
                <td>20/11/2022</td>
                <td>Yeshi Wangchuk</td>
                <td>Pending</td>
                <td>----</td>
            </tr>
        </table>
    </div>
  )
}

export default EditHistory;
