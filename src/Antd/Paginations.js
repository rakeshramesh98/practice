import React,{useState} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import './Paginations.css'
import { Pagination } from 'antd';

export default function Paginations(){
    const [current, setCurrent] = useState(3);
    const onShowSizeChange=(current, pageSize)=> {
        console.log(current, pageSize);
      }
    const onChange=(pageNumber)=> {
        console.log('Page: ', pageNumber);
      }
    const showTotal=(total)=> {
        return `Total ${total} items`;
      }
    const  onChange2 = page => {
        console.log(page);
        setCurrent({
          page
        });
      };
      const itemRender=(current, type, originalElement)=> {
        if (type === 'prev') {
          return <a>Previous</a>;
        }
        if (type === 'next') {
          return <a>Next</a>;
        }
        return originalElement;
      }

    return(
        <div>
            <h1>Basic pagination</h1>
            <Pagination defaultCurrent={1} total={50} />

            <hr></hr>
            <h1>More pages</h1>
            <Pagination defaultCurrent={6} total={500} />

            <hr></hr>
            <h1>Change pageSize</h1>
            <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
            />
            <br />
            <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
            disabled
            />

            <hr></hr>
            <h1>Jump to a page directly</h1>
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
            <br />
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
            

            <hr></hr>
            <h1>Mini size pagination</h1>
            <Pagination size="small" total={50} />
            <Pagination size="small" total={50} showSizeChanger showQuickJumper />
            <Pagination size="small" total={50} showTotal={showTotal} />
            <Pagination
            size="small"
            total={50}
            disabled
            showTotal={showTotal}
            showSizeChanger
            showQuickJumper
            />


            <hr></hr>
            <h1>Simple mode</h1>
            <Pagination simple defaultCurrent={2} total={50} />
            <br />
            <Pagination disabled simple defaultCurrent={2} total={50} />

            <hr></hr>
            <h1>Controlled page number</h1>
            <Pagination setCurrent={current} onChange={onChange2} total={50} />

            <hr></hr>
            <h1>Total Number</h1>
            <Pagination
            total={85}
            showTotal={total => `Total ${total} items`}
            defaultPageSize={20}
            defaultCurrent={1}
            />
            <br />
            <Pagination
            total={85}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            defaultPageSize={20}
            defaultCurrent={1}
            />

            <hr></hr>
            <h1>Show all</h1>
                    <Pagination
            total={85}
            showSizeChanger
            showQuickJumper
            showTotal={total => `Total ${total} items`}
            />

            <hr></hr>
            <h1>Show all</h1>
            <Pagination total={500} itemRender={itemRender} />
        </div>
    )
}