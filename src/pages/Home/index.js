import React from 'react';
import { ScrollView } from 'react-native';

import {
    Container,
    SearchContainer, 
    Input, 
    SearchButton,
    Title,
    BannerButton,
    Banner,
    MovieSlider,
} from './styles'
import Header from '../../components/Header'
import SliderItem from '../../components/SliderItem';
import { Feather } from '@expo/vector-icons'

function Home() {
    return (
        <Container>
            <Header title='React Prime' />

            <SearchContainer>

                <Input
                    placeholder='Ex.: Vingadores'
                    placeholderTextColor='#DDD'
                />

                <SearchButton>
                    <Feather name='search' size={30} color='#FFF' />
                </SearchButton>

            </SearchContainer>

            <ScrollView showsVerticalScrollIndicator={false}>

                <Title>Em cartaz</Title>

                <BannerButton activeOpacity={0.8} onPress={() => {alert('Teste')}}>
                    <Banner
                        resizeMethod='resize'
                        source={{ uri: 'https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80' }}
                    />
                </BannerButton>

                <MovieSlider
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4,5,6]}
                    renderItem={({ item }) => <SliderItem/> }
                />

                <Title>Populares</Title>

                <MovieSlider
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4,5,6]}
                    renderItem={({ item }) => <SliderItem/> }
                />

                <Title>Mais Votados</Title>

                <MovieSlider
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4,5,6]}
                    renderItem={({ item }) => <SliderItem/> }
                />

            </ScrollView>

        </Container>
    )
}

export default Home;