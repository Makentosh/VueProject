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
                        <v-btn class="warning" @click="triggerUpload">
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                      <input ref="fileInput"
                             type="file"
                             style="display: none"
                             accept="image/*"
                              @change="onFileChange">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img :src="imageSrc" height="100" v-if="imageSrc">
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
                        :loading="loading"
                       :disabled="!valid || !image  || loading"
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
          valid: false,
          image: null,
          imageSrc: ''
        }
      },
      methods: {
        createAd () {
          if (this.$refs.form.validate() && this.image) {
            const ad = {
              title: this.title,
              description: this.description,
              promo: this.promo,
              image: this.image
            }
            this.$store.dispatch('createAd', ad)
              .then(() => {
                this.$router.push('/list')
              })
            .catch(() => {})
          }
        },
        triggerUpload () {
          this.$refs.fileInput.click()
        },
        onFileChange (event) {
          const file = event.target.files[0]
          const reader = new FileReader()
          reader.onload = e => {
            this.imageSrc = reader.result
          }
          reader.readAsDataURL(file)
          this.image = file
        }
      },
      computed: {
        loading () {
          return this.$store.getters.loading
        }
      }
    }
</script>

<style scoped>

</style>
