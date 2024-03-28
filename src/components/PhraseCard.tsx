import React, { useState, useEffect } from 'react'
import { Badge, Collapse, Button } from 'react-daisyui'
import { getPhrases } from '../../utils/supabaseFunctions'
import { Message } from '@mui/icons-material';
// import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


  const PhraseCard = ({phrases}) => {
  const navigate = useNavigate();

  
  

  return (
    <>
      {/* <AddCircleOutlineRoundedIcon className='fixed right-2 top-20'/> */}
      <div className=''>
        {phrases.map((phrase) => (
          <div key= {phrase.id}>
            <div className='pt-1'>
              <Collapse checkbox>
                <Collapse.Title className="bg-gray-100  font-medium" >
                  <div className="flex gap-2 items-center">
                    <Badge>{phrase.category}</Badge>
                  </div>
                  <p className='font-bold'>{phrase.phrase}</p>
                </Collapse.Title>
                <Collapse.Content className="bg-gray-100">
                  <div className='flex gap-4'>
                    <p className='font-bold'>{phrase.meaning}</p>
                    <Button size="sm"
                      className='mr-5 ml-auto bg-white'
                      onClick={() => {
                        const id = phrase.id
                        console.log(id)
                        navigate("/details",{state:{id}})
                      }}>DETAILS</Button>
                  </div>
                </Collapse.Content>
              </Collapse>
            </div>
          </div>
        ))}
      </div>
      <div className='pt-1'>
      <Collapse checkbox>
        <Collapse.Title className="bg-gray-100 text-xl font-medium" >
          <Badge color="primary">
            考え
          </Badge>
          <p className='font-bold'>Be on the same page</p>
        </Collapse.Title>
        <Collapse.Content className="bg-gray-100">
          <div className='flex gap-4'>
            <p>共通認識</p>
            <Button size="sm" className='mr-5 ml-auto bg-white'>DETAILS</Button>
          </div>
        </Collapse.Content>
      </Collapse>
</div>
        
      <div className='py-1'>
        <Collapse checkbox>
          <Collapse.Title className="bg-gray-100 text-xl font-medium" >
            <Badge color="secondary">
              カジュアル
            </Badge>
            <p className='font-semibold w-[100px]:font-bold'>I am freaking out</p>
          </Collapse.Title>
          <Collapse.Content className="bg-gray-100">
            <p>パニクっている</p>

          </Collapse.Content>
        </Collapse>
      </div>

      <Collapse checkbox>
        <Collapse.Title className="bg-gray-100 peer-checked:bg-blue-200 peer-checked:text-secondary-content" >
          <div className='text-xs'>カテゴリー:
            <span>
              <Badge color="accent">
                褒める
              </Badge>
            </span></div>
          <p className='font-bold'>I’m proud of you</p>
        </Collapse.Title>
        <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-blue-200 peer-checked:text-secondary-content">
          <p>すごいじゃん！、さすがだね！、私もうれしい</p>

        </Collapse.Content>
      </Collapse>










    </>
  )
}

export default PhraseCard
