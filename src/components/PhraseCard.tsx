import React from 'react'
import { Badge, Collapse, Button } from 'react-daisyui'

const PhraseCard = () => {
  return (
    <>


      <div className='pt-20'>

        <div className="w-full flex justify-center py-8 rounded-md" style={{
          backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'
        }}>
          <Button >Glass button</Button>
        </div>

        <div className='py-1'>
          <Collapse checkbox>
            <Collapse.Title className="bg-gray-100 text-xl font-medium" >
              <div className="flex gap-2 items-center">
                <Badge>あいさつ</Badge>
              </div>
              <p className='font-bold'>It’s been a while(a long time)</p>
            </Collapse.Title>


            <Collapse.Content className="bg-gray-100">
              <div className='flex gap-4'>
                <p className='font-bold'>久しぶり</p>
                <Button size="sm" className='mr-5 ml-auto bg-white'>DETAILS</Button>
              </div>
            </Collapse.Content>

          </Collapse>
        </div>

        <Collapse checkbox>
          <Collapse.Title className="bg-gray-100 text-xl font-medium" >
            <Badge color="primary">
              考え
            </Badge>          <p className='font-bold'>Be on the same page</p>
          </Collapse.Title>
          <Collapse.Content className="bg-gray-100">
            <div className='flex gap-4'>
              <p>共通認識</p>
              <Button size="sm" className='mr-5 ml-auto bg-white'>DETAILS</Button>

            </div>
          </Collapse.Content>
        </Collapse>

        <div className='py-1'>
          <Collapse checkbox>
            <Collapse.Title className="bg-gray-100 text-xl font-medium" >
              <Badge color="secondary">
                カジュアル
              </Badge>            <p className='font-bold'>I am freaking out</p>
            </Collapse.Title>
            <Collapse.Content className="bg-gray-100">
              <p>パニクっている</p>

            </Collapse.Content>
          </Collapse>
        </div>

        <Collapse checkbox>
          <Collapse.Title className="bg-gray-100 text-xl font-medium" >
            <p className='text-xs'>カテゴリー:
              <span>
                <Badge color="accent">
                  褒める
                </Badge>
              </span></p>
            <p className='font-bold'>I’m proud of you</p>
          </Collapse.Title>
          <Collapse.Content className="bg-gray-100">
            <p>すごいじゃん！、さすがだね！、私もうれしい</p>

          </Collapse.Content>
        </Collapse>

        <div className='py-1'>
          <Collapse className="group" checkbox>
            <Collapse.Title className="bg-gray-100 peer-checked:bg-blue-200 peer-checked:text-secondary-content">
              <p className='text-xs'>カテゴリー:
                <span>
                  <Badge color="natural">
                    No Category
                  </Badge>
                </span></p>
              <p className='font-bold text-lg'>whatchamacallit</p>
            </Collapse.Title>
            <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-blue-200 peer-checked:text-secondary-content">
            <div className='flex gap-4'>
                <p>なんて言うんだっけ？</p>
                <Button size="sm" className='mr-5 ml-auto bg-white'>DETAILS</Button>
              </div>
            </Collapse.Content>
          </Collapse>
        </div>
        <div className='my-1'>
          <Collapse className="group" checkbox>
            <Collapse.Title className="bg-gray-100 peer-checked:bg-blue-200 peer-checked:text-secondary-content">
              <p className='text-xs'>カテゴリー: <span>No Category</span></p>
              <p className='font-bold text-lg'>It’s no big deal</p>
            </Collapse.Title>
            <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-blue-200 peer-checked:text-secondary-content">
              <p>大したことないよ、平気だよ</p>
            </Collapse.Content>
          </Collapse>
        </div>
        <div className='py-1'>
          <Collapse className="group" checkbox>
            <Collapse.Title className="bg-gray-100 peer-checked:bg-blue-200 peer-checked:text-secondary-content">
              <p className='text-xs'>カテゴリー:
                <span>
                  <Badge color="neutral">
                    No Category
                  </Badge>
                </span></p>
              <p className='font-bold text-lg'>I’m(We’re) in the same boat</p>
            </Collapse.Title>
            <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-blue-200 peer-checked:text-secondary-content">
              <p>同じ立場にいる/同じ状況である</p>
            </Collapse.Content>
          </Collapse>
        </div>




      </div>
    </>
  )
}

export default PhraseCard
