<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar
                            color="primary"
                            dark>
                        <v-toolbar-title>Registration form</v-toolbar-title>

                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="valid" ref="form" lazy-validation>
                            <v-text-field
                                    label="Email"
                                    name="email"
                                    prepend-icon="person"
                                    type="email"
                                    v-model="email"
                                    :rules="emailRules"
                            />

                            <v-text-field
                                    id="password"
                                    label="Password"
                                    name="password"
                                    prepend-icon="lock"
                                    type="password"
                                    v-model="password"
                                    :counter="6"
                                    :rules="passwordRules"
                            />
                            <v-text-field
                                    id="confirm-password"
                                    label="Confirm-Password"
                                    name="confirm-password"
                                    prepend-icon="lock"
                                    type="password"
                                    v-model="confirmPassword"
                                    :counter="6"
                                    :rules="confirmPasswordRules"
                            />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="primary"
                               @click="onSubmit"
                               :disabled="!valid"
                        >Create Account</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                email: '',
                password: '',
                valid: false,
                confirmPassword: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => v.length >= 6 || 'Password must be less than 6 characters',
                ],
                confirmPasswordRules: [
                    v => !!v || 'Password is required',
                    v => v === this.password|| 'Password should match',
                ]
            }
        },
        methods: {
            onSubmit () {
                if (this.$refs.form.validate()) {
                    const user = {
                        email: this.email,
                        password: this.password
                    }
                    console.log(user)
                }
            }
        }
    }
</script>

<style scoped>

</style>