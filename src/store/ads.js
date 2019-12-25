export default {
    state: {
        ads: [
            {
                title: 'First image',
                description: 'Hello i`m description',
                promo: false,
                imageSrc: 'https://images5.alphacoders.com/947/thumb-1920-947824.png',
                id: '123432'
            },
            {
                title: 'Second image',
                description: 'Hello i`m description second',
                promo: true,
                imageSrc: 'https://i.pinimg.com/originals/6c/a5/8a/6ca58a062b99c7d51d3f8d48ee79914b.jpg',
                id: '12323423'
            },
            {
                title: 'Three image',
                description: 'Hello i`m description three',
                promo: true,
                imageSrc: 'https://wallpaperplay.com/walls/full/3/5/f/44298.jpg',
                id: '12334534'
            }
        ]
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        createAd ({commit}, payload) {
            payload.id = 'sdfsdf'
            commit('createAd', payload)
        }
    },
    getters: {
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds (state) {
            return state.ads
        },
        adById (state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        },
    }
}