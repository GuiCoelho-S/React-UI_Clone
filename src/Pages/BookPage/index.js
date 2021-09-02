import Tel from '../../assets/icons/tel-icon.png';
import Email from '../../assets/icons/email-icon.png'

import React from 'react';
import { motion } from 'framer-motion'
import * as S from './style'


const BookPage = () => {
    return (
        <motion.div 
        initial={{opacity:0, scale:0.8}}
        animate={{opacity:1, scale:1}}
        transition={{delay:0.2, duration:1.2 }}
        >
        <S.Container>
            <S.Content>
                <S.Header>

                </S.Header>
                <S.Apresentation>

                </S.Apresentation>
                <S.CardMain>
                    
                </S.CardMain>
            </S.Content>  
            <S.Details>
            
            </S.Details>
            <S.Main>
                <S.CardVideo>
                    <S.FlexColumn>
                        <div>
                            <h1>That's item 01</h1>
                            <p>Curabitur finibus sapien felis, non luctus odio elementum pulvinar. Aliquam  </p>
                        </div>
                        
                    </S.FlexColumn>

                    <S.FlexColumn>
                        <article>
                        <h1>That's item 02</h1>
                        <p>Curabitur finibus sapien felis, non luctus odio elementum pulvinar. Aliquam  </p>
                        </article>
                    </S.FlexColumn>

                    <S.FlexColumn>
                        <aside>
                            <h1>That's item 03</h1>
                            <p>Curabitur finibus sapien felis, non luctus odio elementum pulvinar. Aliquam  </p>
                        </aside>
                    </S.FlexColumn>
                </S.CardVideo>
            </S.Main>

            <S.MainVideo>
                    <article>
                    
                    <h1><center>GREAT EXPERIENCES FOR HOTEL AND RESORT</center></h1>
                    <div>
                        <p>CLICK THE PLAYER TO</p>
                        <p>BUTAO</p>
                        <p>WATCH THE OVERVIEW</p>
                    </div>
                    </article>
                
                
            </S.MainVideo>

            <S.Main>
                
            </S.Main>           
        </S.Container>
        
        </motion.div>
    );
};

export default BookPage;