function currectColor() {
  const pathname = window.location.pathname;
  if (pathname === '/leaderboard') {
    return ['#6F2DBD', '#CCCCCC', '#CCCCCC'];
  } else if (pathname === '/') {
    return ['#CCCCCC', '#6F2DBD', '#CCCCCC'];
  }
  return ['#CCCCCC', '#CCCCCC', '#6F2DBD'];
}

export default currectColor;
