import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Dimensions
} from 'react-native';



export default function App() {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const width_image = width * 0.5;
  const height_image = height * 0.4 ;
  const data = [
    {id: 1,
    name: "P R E Y",
    disc: "Prey est un jeu de type FPS, orienté action, jouable en solo. Le joueur se réveille au cours de l'année 2032, à bord de la station spatiale Talos I, en orbite autour de la lune. ",
    uri: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGfDwTQVq0HdMjiF9mzEoJsvrhXc3qcJVE1EtzRq4Wk9w7Ox5T"},
    {id: 2,
    name: "Sweet Girl - film 2021",
    disc: " Un homme jure de venger les responsables de la mort de sa femme, tout en protégeant sa fille, la seule famille qu'il lui reste. ",
    uri: "https://fr.web.img2.acsta.net/c_310_420/pictures/21/08/04/12/34/5035523.jpg"},
    {id: 3,
    name: "The Call - Film (2020)",
    disc: "Seo-yeon reçoit de plus en plus d’appels étranges ne semblant pas lui être destinés provenant d’une dénommée Yeong-sook. ",
    uri: "https://media.senscritique.com/media/000019776906/source_big/The_Call.jpg"},
    {id: 4,
    name: "SAS: Red Noticf",
    disc: "Intitulé par Ruby Rose, ce thriller d’action britannique raconte l’histoire d’une petite armée de criminels qui tentent leur plus grand vol avec un train qui s’enfonce profondément dans la Manche reliant l’Angleterre et la France.",
    uri: "https://www.cimaton.org/wp-content/uploads/2021/03/SAS-Red-Notice-2021.jpg"},
    {id: 5,
    name: "Tyler Rake - film 2020",
    disc: "Tyler Rake est un mercenaire intrépide qui travaille dans l'ombre. Alors qu'il n'a plus rien à perdre, il est chargé par un puissant caïd mafieux, pour l'heure incarcéré.",
    uri: "https://fr.web.img6.acsta.net/pictures/20/03/31/09/22/0259222.jpg"},
    {id: 6,
    name: "Le Roi - film 2019",
    disc: "Hal, jeune prince rebelle, tourne le dos à la royauté pour vivre auprès du peuple. Mais à la mort de son père, le tyrannique Henri IV d'Angleterre, Hal ne peut plus échapper au destin qu'il tentait de fuir et est couronné roi à son tour. ",
    uri: "https://fr.web.img5.acsta.net/pictures/19/08/22/09/22/0020378.jpg"},
    {id: 7,
    name: "V E N O M",
    disc: "Depuis la sortie du premier volet de Venom, les fans du MCU espèrent voir un jour sur le grand écran un affrontement entre Venom et Spider-Man, son ennemi juré. Lors d’une interview, Ruben Fleischer, le réalisateur du film, n’avait pas écarté cette possibilité.",
    uri: "https://www.aleqt.com/sites/default/files/styles/scale_660/public/rbitem/2018/09/13/903721-1774303301.jpg?itok=dcb_TBfJ"},
    {id: 8,
    name: "The Old Guard - film 2020",
    disc: "Une petite bande soudée de mercenaires immortels, dirigée par la redoutable Andy, se bat depuis des siècles pour protéger les humains. Mais tandis que le groupe est engagé pour une mission des plus périlleuses.",
    uri: "https://fr.web.img4.acsta.net/pictures/20/05/26/09/44/5988886.jpg"},
    {id: 9,
    name: "Bird Box eBook by Josh Malerman",
    disc: "Written with the narrative tension of The Road and the exquisite terror of classic Stephen King, Bird Box is a propulsive, edge-of-your-seat horror thriller, set in an apocalyptic near-future world—a masterpiece of suspense from the brilliantly imaginative Josh Malerman.",
    uri: "https://kbimages1-a.akamaihd.net/2352a6df-3541-4474-9a9d-44fce5c9f3b8/1200/1200/False/bird-box-1.jpg"},
    {id: 10,
    name: "The Kissing Booth 2 - film 2020",
    disc: " Tout en postulant à plusieurs universités, Elle jongle entre sa relation à distance avec Noah, l'évolution de son amitié avec Lee, et son béguin pour un petit nouveau. ",
    uri: "https://fr.web.img6.acsta.net/pictures/20/05/22/09/26/0527531.jpg"},
  ]
  return (
    <View style={styles.container}>
      <FlatList 
      data={data}
      keyExtractor={item => item.id}
      horizontal
      contentContainerStyle={{ 
        alignItems: 'center' 
      }}
      renderItem={({item}) => {
        return(
          <View>
            <Image 
            source={{ uri : item.uri }}
            
            style={{ 
              width:width_image, 
              height: height_image, 
              margin:20,
              borderRadius: 20
            }}
            />
            
            <View style={{ alignItems: 'center' }}>
              <Text
          style={{ 
            fontWeight: 'bold',
            fontSize: 16 
          }}
          >{item.name}
          </Text>
            </View>
            
          </View>
        )
      }}
      />

      <Text>Hi gayes i' her!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
