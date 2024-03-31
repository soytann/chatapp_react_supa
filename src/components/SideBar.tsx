import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Avatar, Collapse, Badge, Button } from 'react-daisyui';
import PhraseCard from './PhraseCard';
import { Input } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';
import TranslateMessage from './TranslateMessage ';

type Props = {
  handleOpenPhrases: (isOpen: boolean) => void; //書き直す
  isPhraseOpen: boolean; //書き直す
  phrases: string;
  handleSearchPhrases: (e: React.FormEvent<HTMLFormElement>) => void; // handleSearchPhrases の型を追加
  searchPhrases: string;
  results: string[];
  handleChangeSearchPhrases: (e: React.ChangeEvent<HTMLInputElement>) => void; // handleChangeSearchPhrases の型を追加
  handleUsePhrase: () => void;
  setInput:() =>any,
};

const SideBar = ({ isPhraseOpen, phrases, handleOpenPhrases,handleSearchPhrases,searchPhrases,results,handleChangeSearchPhrases,setInput}): Props => {
  // const [searchPhrases, setSearchPhrases] = useState('');
  // const [results, setResults] = useState<any>([]);
  const navigate = useNavigate();

  // async function handleSearchPhrases(e) {
  //   e.preventDefault();
  //   try {
  //     handleOpenPhrases(true);
  //     console.log(searchPhrases)
  //     const searchedResults = await fetchsearchedPhrases(searchPhrases)
  //     setResults(searchedResults);
  //     console.log(results)

  //   } catch (error) {
  //     console.error("検索できてません", error)

  //   }



  function handleUsePhrase() {
    console.log("useしたい")
    console.log(results)
    results.map((result) => {
      console.log(result)
    })

  }


//   return (
//     <>
//           <div className='fixed'>
//       <Sidebar>
//         <div className='h-screen'>
//           <TranslateMessage />
//       </div>
//     </Sidebar >
//     </div>
//     </>
// )

  return (


    <div className='fixed ml-12 w-[230px] px-0'>
      <Sidebar>
        <div className='h-screen '>
          {/* {console.log(isPhraseOpen)}
          {console.log(phrases)} */}
          {isPhraseOpen ?

            <Menu>
              <div className='A'>
                <SubMenu label="Friends">
                  <MenuItem> Add Friends</MenuItem>
                </SubMenu>
                <form action=""
                  onSubmit={handleSearchPhrases}
                >
                  <div className='text-center'>
                    <Input
                      value={searchPhrases}
                      onChange={ handleChangeSearchPhrases }
                      size='sm'
                      placeholder='Search Phrases' />
                  </div>
                </form>
              </div>
              <div className=' w-[230px] h-full fixed top-[88px] overflow-y-scroll mx-2 pb-32 text-md'>

                {/* <PhraseCard phrases={phrases} /> */}

                {results.length > 0 ? (
                  results.map((result) => (

                    <div key={result.id}>
                      <div className='pt-1'>
                        <Collapse >
                          <Collapse.Title className="bg-gray-100  font-medium" >
                            <div className="flex gap-2 items-center">
                              <Badge>{result.category}</Badge>
                            </div>
                            <div className='flex'>

                              <p className='font-bold'>{result.phrase}</p>
                              
                              <Button
                                size="xs"
                                className='ml-auto bg-white'
                                onClick={() => {
                                  setInput(result.phrase)
                                }}
                                >USE</Button>
                              </div>

                          </Collapse.Title>
                          <Collapse.Content className="bg-gray-100">
                            <div className='flex gap-4'>
                              <p className='font-bold'>{result.meaning}</p>
                              <Button size="xs"
                                className='mr-2 ml-auto bg-white'
                                onClick={() => {
                                  console.log("clicked")
                                  const id = result.id
                                  console.log(id)
                                  navigate("/details", { state: { id } })
                                }}>DETAILS</Button>
                            </div>
                          </Collapse.Content>
                        </Collapse>
                      </div>
                    </div>

                  ))
                )
                  :
                  (<p>検索結果はありません</p>
                  )
                }

              </div>
            </Menu>


            :
            <Menu>
              <SubMenu label="Friends">
                <MenuItem>Add </MenuItem>
              </SubMenu>
              <MenuItem>
                <div className='flex gap-4'>
                  <Avatar shape="circle" size={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTHHaN-Lx3wi7rL5u2Bwg-NVf7opArrYBfD4reWe_GvQb64kVqTRDWnxw6rO7L6xkEfY&usqp=CAU"
                  />
                  <div className='items-center font-semibold py-1/2'>麒麟</div>
                </div>
              </MenuItem>
            </Menu>

          }
        </div>
      </Sidebar>
    </div>
  )
}

export default SideBar
