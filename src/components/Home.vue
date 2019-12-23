/* eslint-disable */
<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                        v-for="ad in ads" :src="ad.imageSrc"
                        :key="ad.id"
                        >
                            <div class="car-link">
                                <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4
                v-for="ad in ads" :key="ad.id">
                    <v-card>
                        <v-card-media
                                height="200px"
                                :src="ad.imageSrc">
                        </v-card-media>
                        <v-card-title>
                            <div>
                                <h3 class="headline mb-0">{{ad.title}}</h3>
                                <div>{{ad.description}}</div>
                            </div>
                        </v-card-title>


                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
                            <v-btn color="primary" raised>Buy</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                ads: [
                    {
                        title: 'First image',
                        description: 'Hello i`m description',
                        promo: false,
                        imageSrc: 'https://images5.alphacoders.com/947/thumb-1920-947824.png',
                        id: 123
                    },
                    {
                        title: 'Second image',
                        description: 'Hello i`m description second',
                        promo: true,
                        imageSrc: 'https://i.pinimg.com/originals/6c/a5/8a/6ca58a062b99c7d51d3f8d48ee79914b.jpg',
                        id: 456
                    },
                    {
                        title: 'Three image',
                        description: 'Hello i`m description three',
                        promo: true,
                        imageSrc: 'https://wallpaperplay.com/walls/full/3/5/f/44298.jpg',
                        id: 789
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .car-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0,0,0, .5);
        transform: translateX(-50%);
        padding: 5px 15px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
</style>