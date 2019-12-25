/* eslint-disable */
<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-md3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form v-model="valid" ref="form" validation class="mb-3">
                    <v-text-field
                            label="Ad title"
                            name="title"
                            type="text"
                            v-model="title"
                            required
                            :rules="[v => !!v || 'Title is required']"
                    />

                    <v-text-field
                            label="Ad description"
                            name="description"
                            type="text"
                            v-model="description"
                            multi-line
                            :rules="[v => !!v || 'Description is required']"
                    />
                </v-form>
                <v-layout row class="mb-3">
                    <v-flex xs12>
                        <v-btn class="warning">
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img src="" height="100">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                        v-model="promo"
                        color="primary"
                        label="Add to promo?">
                        </v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                        class="success"
                       :disabled="!valid"
                        @click="createAd">Create ad</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
      data () {
        return {
          title: '',
          description: '',
          promo: false,
          valid: false
        }
      },

      methods: {
        createAd () {
          if (this.$refs.form.validate()) {
            const ad = {
              title: this.title,
              description: this.description,
              promo: this.promo,
              imageSrc: 'https://i.pinimg.com/originals/c5/6d/77/c56d77398e83eb02a033511a95dde108.jpg'
            }
            this.$store.dispatch('createAd', ad)
          }
        }
      }
    }
</script>

<style scoped>

</style>
