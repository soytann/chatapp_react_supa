import React from 'react'
import { Button } from 'react-daisyui'
import { Input, Select, Option, Textarea } from '@material-tailwind/react';
import { useState } from 'react';

const SavePhrase = () => {
  const [value, setValue] = useState('default');
  return (
    <div>
      <div className='mt-20 p-4 bg-gray-100 h-[684px] rounded-xl mx-6 ' >

        <div className=" w-full p-4 font-sans">
          <p className='font-bold'>Phrase</p>
          <Input
            className='w-full'
            placeholder='Hello' />
        </div>

        <div className=" w-full p-4 font-sans">
          <p className='font-bold'>Meaning</p>
          <Input
            className='w-full'
            placeholder='こんにちは' />
        </div>

        <div className='sm:flex gap-2'>
          <div className=" w-2/3 p-4 font-sans">
            <p className='font-bold'>Category</p>
            <Select
              onChange={event => setValue(event.target.value)}>
              <Option value={'Homer'}>あいさつ</Option>
              <Option value={'Marge'}>意見</Option>
              <Option value={'Bart'}>感謝</Option>
              <Option value={'Lisa'}>褒める</Option>
              <Option value={'Maggie'}>カジュアル</Option>
            </Select>
          </div>
          <div className=" w-2/3 p-4  font-sans">
            <p className='font-bold'>Label</p>
            <Select className='bg-opacity-40'
              onChange={event => setValue(event.target.value)}>
              <Option value={'purple'}><Button className='bg-opacity-30' color='primary' shape='circle' size='xs'></Button></Option>
              <Option value={'blue'}><Button className='bg-opacity-30' color='info' shape='circle' size='xs'></Button></Option>
              <Option value={'orange'}><Button className='bg-opacity-30' color='warning' shape='circle' size='xs'></Button></Option>
              <Option value={'red'}><Button className='bg-opacity-30' color='error' shape='circle' size='xs'></Button></Option>
              <Option value={'green'}><Button className='bg-opacity-30' color='success' shape='circle' size='xs'></Button></Option>
            </Select>
          </div>
        </div>

        <div className=" w-full p-4 py-2 font-sans">
          <p className='font-bold'>Memo</p>
          <Textarea
            className='w-full' />
        </div>

        <div className=" w-full p-4 py-2 font-sans">
          <p className='font-bold'>Memo</p>
          <Textarea
            className='w-full' />
        </div>
        <div className='text-center mt-4'>
        <Button className="bg-white " color="info" size='md'>SAVE</Button>

        </div>
      </div>
    </div>
  )
}

export default SavePhrase
