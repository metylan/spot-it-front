<template>
    <v-dialog v-model="dialogAddMarker">
        <v-card>
            <v-toolbar>
                <v-toolbar-title>
                    Ajouter votre lieu
                </v-toolbar-title>
                <v-spacer />
                <v-btn icon fab @click="cancel()">
                    <v-icon>
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-toolbar>

            <v-card-text>

                <v-text-field label="nom du point" required v-model="form.name">

                </v-text-field>
                <v-textarea label="Message" persistent-hint required v-model="form.message"></v-textarea>

            </v-card-text>
            <v-card-actions>
                <v-btn @click="cancel()">
                    Annuler
                </v-btn>
                <v-btn @click="submit()">
                    Valider
                </v-btn>
            </v-card-actions>

        </v-card>
    </v-dialog>

</template>

<script>
import { addMarker } from "../api/markers";
import { isConnect } from "../api/auth";

export default {
    name: "addMarker",
    props: {
        dialog: { required: true, type: Boolean },
        position: { required: true, type: Array },
    },
    data() {
        return {
            form: {
                message: "",
                name: "",

            }
        }
    },
    computed: {
        dialogAddMarker: {
            get() {
                return this.dialog
            },
            set(v) {
                this.$emit("update:dialog", v)
            }
        }
    },
    methods: {
        cancel() {
            this.dialogAddMarker = false;
        },
        async submit() {
            if (isConnect) {
                await addMarker(this.position[0], this.position[1], this.form.name, this.form.message, 1);
                this.$emit("marker", true)
                this.cancel();
            }
        }
    }
}
</script>

<style>
</style>