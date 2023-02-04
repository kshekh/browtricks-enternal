<template>
  <div class="container">
    <div class="container">
      <VueSignaturePad
        id="signature"
        width="200px"
        height="148px"
        ref="signaturePad"
        :options="options"
      />
    </div>
    <div class="buttons">
      <button @click="undo">Undo</button>
      <button @click="save">Save</button>
      <button @click="change">Change Color</button>
      <button @click="resume">Resume Color</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    options: {
      penColor: "#c0f",
    },
  }),
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();

      alert("Open DevTools see the save data.");
      console.log(isEmpty);
      console.log(data);
    },
    change() {
      this.options = {
        penColor: "#00f",
      };
    },
    resume() {
      this.options = {
        penColor: "#c0f",
      };
    },
  },
};
</script>

<style scoped>
canvas {
    border: 1px solid black;
    background-color: white;
    cursor: crosshair;
}
</style>
