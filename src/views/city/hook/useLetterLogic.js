import { ref } from 'vue'

function useLetterLogic() {
  const letter = ref('')

  function handleLetterChange(selected) {
    letter.value = selected
  }
  return { letter, handleLetterChange }
}

export default useLetterLogic