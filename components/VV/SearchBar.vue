<template v-slot:search>
  <div>
    <div class="-search-bar">
      <form action="./" class="-search-bar-form ">
        <IconSearch class="-input-icon" />
        <input
          class="-search-input"
          type="text"
          id="pesquisar"
          placeholder="Digite aqui"
          autocomplete="off"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import IconSearch from '../Icons/IconSearch.vue';


const searchTerm = ref('');
const filteredItems = ref([]);

const filterItems = () => {
  filteredItems.value = items.value.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
};
</script>
<style scoped>
/* ## Search Bar - Settings ## */

/* Search bar presets */
.-search-bar {
  display: flex;
  width: 20%;
  position: relative;
  align-items: center;
}

.-search-bar-form {
  width: 100%;
}

.-search-input {
  display: flex;
  align-items: stretch;
  width: 100% !important;
  height: 48px;

  font-weight: 550;
  font-size: 0.8rem !important;
  font-size: 14px;

  border-radius: 8px;
  border: 2px solid #4F5978;

  padding: 16px;

  transition: border-color 0.3s;

  flex: 1;

}

/* ## Hover ## */
.-search-input:focus {
  outline: none;
  border-color: #FFF;
}

.-input-icon {
  width: 20px;
  height: 20px;

  position: absolute;
  left: auto;
  right: 15px !important;
  top: 50%;
  transform: translateY(-50%);

  transition: fill 0.3s;

  cursor: pointer;
}


.form:focus-within .icon {
  fill: #00d047;
}
</style>
