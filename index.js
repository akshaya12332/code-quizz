function goToPage(pageNum) {
    for (let i = 1; i <= 4; i++) {
      document.getElementById(`page${i}`).classList.add('hidden');
    }
    document.getElementById(`page${pageNum}`).classList.remove('hidden');
  }
  