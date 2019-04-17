<template>
    <b-container style="margin-top: 5em;margin-bottom: 10em;">
        <b-card no-body style="width: 50%;margin: 0 auto;border-radius: 4px;box-shadow: 0 0 8px rgba(0,0,0,.1);">
            <b-tabs card>
                <b-tab title="登录" active>
                    <b-card-text>
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group
                                    size="sm"
                                    id="input-group-1"
                                    label="账号"
                                    label-for="input-1"
                            >
                                <b-form-input
                                        id="input-1"
                                        v-model="form.user"
                                        type="text"
                                        required
                                        placeholder="Enter user"
                                ></b-form-input>
                            </b-form-group>


                            <b-form-group id="input-group-2" label="密码" label-for="input-2">
                                <b-form-input
                                        id="input-2"
                                        v-model="form.password"
                                        required
                                        type="password"
                                        placeholder="Enter password"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-3">
                                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                                    <b-form-checkbox value="1">记住我</b-form-checkbox>
                                </b-form-checkbox-group>
                            </b-form-group>
                            <div style="margin: 0 auto;width: 100%;text-align: center;">
                                <b-button type="submit" block variant="primary">登录</b-button>
                            </div>
                        </b-form>
                    </b-card-text>
                </b-tab>
                <b-tab title="注册">
                    <b-card-text>
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group
                                    size="sm"
                                    id="input-group-11"
                                    label="Email address:"
                                    label-for="input-1"
                                    description="We'll never share your email with anyone else."
                            >
                                <b-form-input
                                        id="input-11"
                                        v-model="form.user"
                                        type="text"
                                        required
                                        placeholder="Enter user"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-22" label="Your Name:" label-for="input-2">
                                <b-form-input
                                        id="input-22"
                                        v-model="form.password"
                                        required
                                        type="password"
                                        placeholder="Enter password"
                                ></b-form-input>
                            </b-form-group>

                            <div style="margin: 0 auto;width: 100%;text-align: center;">
                                <b-button type="submit" variant="primary">注册</b-button>
                                <b-button type="reset" variant="danger">重置</b-button>
                            </div>
                        </b-form>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </b-container>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    user: '',
                    password: '',
                    checked: []
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>

<style scoped>

</style>
