  const titles = [
    "7VES",
    "Y\\/ES",
    "YV3S",
    "YVE5",
    "6000"
  ];

  let index = 0;

  setInterval(() => {
    document.title = titles[index];
    index = (index + 1) % titles.length; 
  }, 100);