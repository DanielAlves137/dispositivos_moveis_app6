import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    titulo:{
        color: 'grey',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    imagem:{
        width: 210,
        height: 150,
        marginBottom: 30,
    },
    verificar:{
        width: 330,
        height: 50,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    resultado:{
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginLeft: 65,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export {styles};