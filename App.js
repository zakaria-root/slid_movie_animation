import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Animated, useWindowDimensions } from 'react-native';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Dimensions
} from 'react-native';
import { Rating } from 'react-native-elements';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import Svg from 'react-native-svg';
import { Rect } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableHighlight } from 'react-native';
import { useEffect } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';



const AnimatedImage = Animated.createAnimatedComponent((Image))

const {width , height} = Dimensions.get('window');
const HEIGHT_BACKDROP = height * 0.6;
const width_image = width * 0.49;
const height_image = height * 0.4 ;
const ITEM_SIZE = width_image * 1.15;
const ITEM_HEIGHT = height_image * 1.51;
const SPACING_SIZE = (width - ITEM_SIZE) / 2;

const BG ='#ff1a53';
const ITEM ='transparent';
const LOGO  = 'https://cdn.pngsumo.com/netflix-logo-icon-of-flat-style-available-in-svg-png-eps-ai-netflix-icon-png-256_256.png';

const BackDrop = ({scrollx}) => {
      const AnimatedIcon = Animated.createAnimatedComponent(AntDesign);
      
  const movies = [
    {
      id: 1,
      uri: "https://de.web.img2.acsta.net/videothumbnails/21/08/12/09/36/5175268.png"
    },
    {
      id: 2,
      uri: "https://blogger.googleusercontent.com/img/a/AVvXsEhnCK8aXmqBQd4PLOl8hV_g_Z_3Uwd-x3l8whPZ07xX94vDRz3wOy6OtF-ijQOn8YzpHOGhar7dH_OCh_oc8Okyt9N7kFdgBeyC_TK9gkw9lVEe3tzV22Aah-sHmsOc0-ugpDDeLB5vcP5XBC3sRyUdyv8QDR2Dgk21VG8Z1wRQYnYTvv1EMBayZ5E2gg=w640-h428"
    },
    {
      id: 3,
      uri: "https://blog.asianwiki.com/wp-content/uploads/2019/01/Call-KM-tp3-2.jpg"
    },
    {
      id: 4,
      uri: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6050d37bcec68f7183dda92c%2FSAS--Red-Notice--Sam-Heughan--Andy-Serkis--interview--Outlander--Marvel--DC--Andy%2F960x0.jpg%3Ffit%3Dscale"
    },
    {
      id: 5,
      uri: "https://ciudadfm.net/wp-content/uploads/2020/05/AAAABeTnYOZq4GB-VyNC3j57OvJGIkmsOyvDMmWk73VdugMUEjIppKIXzBUK543u6-3izMjOChA3zvUs_i0-dbZhPlHVVZAa.jpg"
    },
    {
      id: 6,
      uri: "https://decider.com/wp-content/uploads/2019/10/the-king-timothee-chalamet-cheekbones.jpg?quality=80&strip=all"
    },
    {
      id: 7,
      uri: "https://www.hdwallpapers.in/thumbs/2018/venom_4k_8k_2-t2.jpg"
    },
    {
      id: 8,
      uri: "http://arttalks.ir/wp-content/uploads/2020/08/%D9%86%D9%82%D8%AF-%D9%81%DB%8C%D9%84%D9%85-The-Old-Guard.jpg"
    },
    {
      id: 9,
      uri: "https://media.webb-tv.nu/2020/10/bird-box-netflix-gratis-streaming.jpg"
    },
    {
      id: 10,
      uri: "https://nilsenreport.ca/wp-content/uploads/2021/07/The-Kissing-Booth-season-4.jpg"
    },
    
    ]
      
    return(
      <View style={{  position: 'absolute',left: 0, width, height: height*1.2 , backgroundColor: BG}} >
            {movies.map((item,index) => {
              const inputRange = [
                (index - 2) * (ITEM_SIZE + 22),
                (index - 1) * (ITEM_SIZE + 22),
              ];
              const translateX = scrollx.interpolate({
                inputRange,
                outputRange: [-width, 0],
                
              });
                // const rotate = Animated.Value("0deg");
              
              const rotate = scrollx.interpolate({
                inputRange,
                outputRange:['-180deg', '0deg']
              })
              
              const translatIcon = scrollx.interpolate({
                inputRange,
                outputRange:[-width,0],
              })
              const opacityIcon = scrollx.interpolate({
                inputRange :[
                  (index - 2) * (ITEM_SIZE + 22),
                  (index - 1) * (ITEM_SIZE + 22),
                  (index ) * (ITEM_SIZE + 22),
                ],
                outputRange:[0,1,0],
              })
                const scaleIcon = scrollx.interpolate({
                  inputRange :[
                    (index - 2) * (ITEM_SIZE + 22),
                    (index - 1.5) * (ITEM_SIZE + 22),
                    (index - 1) * (ITEM_SIZE + 22),
                    (index - 0.5) * (ITEM_SIZE + 22),
                    (index ) * (ITEM_SIZE + 22),
                  ],
                  outputRange: [0,0,1.2,0,0]
                })
            
              
              return(
                <View style={{ width, height: height * 1.1, position: 'absolute' }}>
                <Animated.View 
                removeClippedSubviews={false}
                style={{
                  position: 'absolute',
                  width: translateX,
                  height,
                  overflow: 'hidden',
                }}>
                  <Image 
                  source={{ uri : item.uri}}
                  style={{ width, height: HEIGHT_BACKDROP ,position: 'absolute', resizeMode: 'cover' }}
                  />
                </Animated.View>
                
                <AnimatedIcon 
                    name="caretdown" 
                    size={35} 
                    color="#ffe6e6"
                    style={{ 
                      position: 'absolute',
                      top: HEIGHT_BACKDROP * .3,
                      left : width /2 - 8,
                      zIndex: 100,
                      transform: [{translateX: translatIcon}, {scale: scaleIcon}],
                      opacity: opacityIcon
                  }}
                    />
                <View style={{ 
                  position: 'absolute', 
                  width, 
                  height : height* 0.4, 
                  bottom: 0, 
                  
                  }}>
                  
                    <AntDesign 
                    name="stepbackward" 
                    size={40} 
                    color="white"
                    style={{ bottom: 65, left: 50 , position: 'absolute'}}
                    />
                  <AnimatedImage 
                source={{ uri : LOGO }}
                style={{ 
                  position: 'absolute', 
                  width: 110, 
                  height: 110, 
                  bottom: 30, 
                  right: width/2 -56,
                  transform: [
                    {rotate},
                    
                  ],
                  
                }}
                />
                <AntDesign 
                name="stepforward" 
                size={40} 
                color="white"
                style={{ bottom: 65, right: 50 , position: 'absolute'}}
                />
                <LinearGradient
                    colors={['transparent', BG]}
                    style={{ width, height: HEIGHT_BACKDROP * 2.3, position: 'absolute',   }}
                    />
                </View>
                </View>
              )
              })}
            <LinearGradient 
            colors={['transparent', BG]}
              style={{ width, height: HEIGHT_BACKDROP  }}
            />
            
            
      </View>
)
}

export default function App() {

  // const {width , height} = useWindowDimensions();

  // const height = Dimensions.get('window').height;
  
  const scrollx =  React.useRef(new Animated.Value(0)).current;
  const [pressed , setpressed] = useState(false);
  const scale = new Animated.Value(0);
  const scalebg = new Animated.Value(0);
  const opacity = new Animated.Value(0.5);
  const [counter, setcounter] = useState(-1);  

  const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
  const AnimatedIcon = Animated.createAnimatedComponent(AntDesign);

  const data = [
    {id:0 ,name : null,rating : null, genres: [null],uri : null},
    {id: 1,
    name: "P R E Y",
    rating:"8.2",
    genres: ["Aventure", "Fantastique"],
    disc: "Prey est un jeu de type FPS, orienté action, jouable en solo orienté action, jouable en solo jouable en solo.",
    uri: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGfDwTQVq0HdMjiF9mzEoJsvrhXc3qcJVE1EtzRq4Wk9w7Ox5T"},
    {id: 2,
    name: "Sweet Girl",
    rating:"8.9",
    genres: ["Aventure", "Drame"],
    disc: "Un homme jure de venger les responsables de la mort de sa femme, orienté action , orienté action. ",
    uri: "https://fr.web.img2.acsta.net/c_310_420/pictures/21/08/04/12/34/5035523.jpg"},
    {id: 3,
    name: "The Call",
    rating:"7.3",
    genres: ["Drame", "d'horreur"],
    disc: "Seo-yeon reçoit de plus en plus d’appels étranges ne semblan orienté action, jouable en solo.",
    uri: "https://media.senscritique.com/media/000019776906/source_big/The_Call.jpg"},
    {id: 4,
    name: "SAS: Red Noticf",
    rating:"6.4",
    genres: ["Aventure", "Fantastique"],
    disc: "Intitulé par Ruby Rose, ce thriller d’action britannique, ce thriller d’action britannique, ce thriller d’action.",
    uri: "https://www.cimaton.org/wp-content/uploads/2021/03/SAS-Red-Notice-2021.jpg"},
    {id: 5,
    name: "Tyler Rake",
    rating:"9.1",
    genres: ["Aventure", "Drame", "Fantastique"],
    disc: "Tyler Rake est un mercenaire intrépide qui travaille dans l'ombre un mercenaire intrépide qui travaille dans l'ombre",
    uri: "https://fr.web.img6.acsta.net/pictures/20/03/31/09/22/0259222.jpg"},
    {id: 6,
    name: "Le Roi",
    rating:"8.5",
    genres: ["Fantastique"],
    disc: "Hal, jeune prince rebelle, tourne le dos à la royauté. tourne le dos à la royauté, tourne le dos à la royauté. ",
    uri: "https://fr.web.img5.acsta.net/pictures/19/08/22/09/22/0020378.jpg"},
    {id: 7,
    name: "V E N O M",
    rating:"9.5",
    genres: ["Fantastique", "d'horreur"],
    disc: "Depuis la sortie du premier volet de Venom, les fans du MCU espèrent les fans du MCU espèrent.",
    uri: "https://www.aleqt.com/sites/default/files/styles/scale_660/public/rbitem/2018/09/13/903721-1774303301.jpg?itok=dcb_TBfJ"},
    {id: 8,
    name: "The Old Guard",
    rating:"7.5",
    genres: ["Fantastique"],
    disc: "Une petite bande soudée de mercenaires immortels, soudée de mercenaires immortels.",
    uri: "https://fr.web.img4.acsta.net/pictures/20/05/26/09/44/5988886.jpg"},
    {id: 9,
    name: "Bird Box eBook",
    rating:"5.9",
    genres: ["Drame", "tristes"],
    disc: "Written with the narrative tension of The Road and the exquisite, tension of The Road and the exquisite",
    uri: "https://kbimages1-a.akamaihd.net/2352a6df-3541-4474-9a9d-44fce5c9f3b8/1200/1200/False/bird-box-1.jpg"},
    {id: 10,
    name: "The Kissing Booth 2",
    rating:"9.1",
    genres: ["Aventure", "comiques"],
    disc: "Tout en postulant à plusieurs universités ,Tout en postulant à plusieurs universités. ",
    uri: "https://fr.web.img6.acsta.net/pictures/20/05/22/09/26/0527531.jpg"},
    {id:11 ,name : null,rating : null, genres: [null],uri : null},
  ]


  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackDrop scrollx={scrollx} />
      <Animated.FlatList 
      data={data}
      keyExtractor={item => item.id}
      horizontal
      contentContainerStyle={{ 
        alignItems: 'center',
        marginTop: 100
      }}
      snapToInterval={ITEM_SIZE + 22}
      decelerationRate={0}
      onScroll={Animated.event(
        [{nativeEvent : {contentOffset : { x :scrollx}}}],
        {useNativeDriver : false}
      )}
      scrollEventThrottle={16}
      renderItem={({item, index}) => {


       


        const genres = item.genres.map(genre => {
          return(
            <View style={{ borderRadius: 10, borderWidth:0.5 , maxWidth: 65, paddingHorizontal: 5, paddingVertical :3, alignItems: 'center', borderColor: "#ffe6ec", margin: 4 }} >
              <Text style={{ color:'#ffb3c6', fontSize:9 }}>{genre}</Text>
            </View>
          )
          
        })

        const inputRange = [
          (index - 2) * (ITEM_SIZE + 22),
          (index - 1) * (ITEM_SIZE + 22),
          index * (ITEM_SIZE + 22),
        ]
        const translateY = scrollx.interpolate({
          inputRange,
          outputRange:[0, -50, 0],
          
        })
          const rotate = scrollx.interpolate({
          inputRange:[
            (index - 2) * (ITEM_SIZE + 22),
            (index - 1) * (ITEM_SIZE + 22),
          ],
          outputRange:['-180deg', '0deg']
        })

        
        const conditionHandler = (id) =>{
          if(id == counter){
          return true
        }
        }
        

        if (!item.uri) {
          return(<View style={{ width: SPACING_SIZE,  }} />)
        }

        return(
          <View
            
          >
            
            <Animated.View 
            onTouchStart={()=> {
                setcounter(item.id);
              Animated.parallel([
                Animated.spring(scale, {
                toValue: 1.2,
                useNativeDriver: false
              }),
              Animated.spring(opacity, {
                toValue: 0.8,
                useNativeDriver: false
              }),
              ]).start(() =>
                Animated.spring(scale, {
                  toValue: 1,
                  duration: 100,
                  useNativeDriver: false
                }).start()
              )
              
            }}

            style={{ 
            width: ITEM_SIZE, 
            height: ITEM_HEIGHT, 
            margin: 11,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            transform: [{translateY}],
            backgroundColor: "#f5efef"
          }}>
            
            <Image 
            source={{ uri : item.uri }}
            
            style={{ 
              width:width_image, 
              height: height_image, 
              // margin:20,
              borderRadius: 30,
              
            }}
            />
        
           <AnimatedIcon 
            name="playcircleo" 
            size={50} 
            color="#ffe6ec" 
            style={ (item.id === counter) ? [{transform:[{scale}], opacity ,position: 'absolute',  zIndex: 10, bottom: 200,},] : [{  position: 'absolute',  zIndex: 10, bottom: 200,
            opacity: 0,
            
          }]}  
            />
            <AnimatedLinearGradient 
            colors={['transparent' , '#33000c']}
            style={(item.id === counter) ? [{ width: width_image, height: height_image, position: 'absolute', bottom: 132, borderRadius: 30,
            opacity ,
            }] : [{ width: width_image, height: height_image, position: 'absolute', bottom: 132, borderRadius: 30,
            opacity: 0.5
            }]}
            />


            <View style={{ alignItems: 'center', marginTop: 8,}}>
              <Text
              style={{ 
                fontWeight: 'bold',
                fontSize: 16,
                color: '#ffe6ec' 
              }}
              >
                {item.name}
              </Text>
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'center',}}>
              <Text style={{ fontWeight: 'bold', paddingRight: 2, 
              color: '#ffb3c6'
               }}>{item.rating}</Text>
              <Rating  
              type='custom' 
              ratingColor='#ffe6ec'
              ratingBackgroundColor='#ffb3c6'
              imageSize={15}  
              startingValue={item.rating / 2}            
              style={{ padding:3,}}
              tintColor={'#ff4d79'}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
              {genres}
            </View>
            
            <View style={{ 
              paddingHorizontal: 20,
              paddingTop: 2 }}>
              <Text style={{ alignItems: 'center', fontSize:10, color: '#ffe6ec'}}>
              {item.disc}
              </Text>
            </View>
            <LinearGradient
          colors={[ITEM , BG, ]}
          style={{ 
            width: ITEM_SIZE, 
            height : ITEM_HEIGHT , 
            position: 'absolute', 
            borderRadius: 30,
            zIndex:-1
          }}
          />
          <LinearGradient
          colors={[ITEM , BG, ]}
          style={{ 
            width: ITEM_SIZE, 
            height : ITEM_HEIGHT , 
            position: 'absolute', 
            borderRadius: 30,
            opacity: .2,
          }}
          />
          </Animated.View>
          </View>

        )
      }}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20,
    
  },
});
