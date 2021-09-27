import { StatusBar } from 'expo-status-bar';
import React from 'react';
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

const AnimatedSvg =  Animated.createAnimatedComponent(Svg)
const AnimatedImage = Animated.createAnimatedComponent((Image))

const {width , height} = Dimensions.get('window');
const HEIGHT_BACKDROP = height * 0.6;
const width_image = width * 0.49;
const height_image = height * 0.4 ;
const ITEM_SIZE = width_image * 1.15;
const ITEM_HEIGHT = height_image * 1.51;
const SPACING_SIZE = (width - ITEM_SIZE) / 2;


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
        ]

        const BackDrop = ({scrollx}) => {
              
          
              
            return(
              <View style={{  position: 'absolute',left: 0, width, height , top: 0}} >
                {data.map((item,index) => {
                  const inputRange = [
                    (index - 2) * (ITEM_SIZE + 22),
                    (index - 1) * (ITEM_SIZE + 22),
                  ];
                  const translateX = scrollx.interpolate({
                    inputRange,
                    outputRange: [-width, 0]
                  });

                    
                  if(!item.uri){
                    return null
                  }
                  return(
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
                      style={{ width, height: HEIGHT_BACKDROP ,position: 'absolute' }}
                      />
                    </Animated.View> 
                  )
                  })}

      </View>
    )
}

export default function App() {

  // const {width , height} = useWindowDimensions();

  // const height = Dimensions.get('window').height;
  
  const scrollx =  React.useRef(new Animated.Value(0)).current;

  
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackDrop scrollx={scrollx} />
      <Animated.FlatList 
      data={data}
      keyExtractor={item => item.id}
      horizontal
      contentContainerStyle={{ 
        alignItems: 'center' 
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
            <View style={{ borderRadius: 10, borderWidth:0.5 , maxWidth: 65, paddingHorizontal: 5, paddingVertical :3, alignItems: 'center', borderColor: "gray", margin: 4 }} >
              <Text style={{ color:'gray', fontSize:9 }}>{genre}</Text>
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
          outputRange:[0, -50, 0]
        })
        

        if (!item.uri) {
          return(<View style={{ width: SPACING_SIZE,  }} />)
        }

        

        return(
          
            <Animated.View style={{ 
            width: ITEM_SIZE, 
            height: ITEM_HEIGHT, 
            margin: 11,
            borderRadius: 30,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            transform: [{translateY}]
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
            
            <View style={{ alignItems: 'center', marginTop: 8,}}>
              <Text
              style={{ 
                fontWeight: 'bold',
                fontSize: 16 
              }}
              >
                {item.name}
              </Text>
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', paddingRight: 2 }}>{item.rating}</Text>
              <Rating  
              type='custom' 
              ratingColor='red'
              ratingBackgroundColor='#c8c7c8'
              imageSize={15}  
              startingValue={item.rating / 2}            
              style={{ padding:3 }}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
              {genres}
            </View>
            
            <View style={{ 
              paddingHorizontal: 20,
              paddingTop: 2 }}>
              <Text style={{ alignItems: 'center', fontSize:10 }}>
              {item.disc}
              </Text>
            </View>
            
          </Animated.View>
          

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
