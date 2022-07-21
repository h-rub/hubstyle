if (response.status === 200) {
  setLoading(true);
  let result = json;
  localStorage.setItem('token', result.token);
  localStorage.setItem('first_name', result.user.first_name);
  localStorage.setItem('email', result.user.email);
  setTimeout(() => {
    navigate('/');
  }, 2000);
} else {
  setLoading(true);
  setTimeout(() => {
    setLocked(true);
    setLoading(false);
  }, 2000);
}
