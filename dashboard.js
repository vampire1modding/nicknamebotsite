const loginForm = document.getElementById('loginForm');
const loginSection = document.getElementById('loginSection');
const dashboardSection = document.getElementById('dashboardSection');
const loginError = document.getElementById('loginError');

loginForm.addEventListener('submit', function(e){
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if(username === 'GMRPSTAFF' && password === 'GMRPSTAFF'){
    loginSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
    loadDashboardData();
  } else {
    loginError.textContent = 'Incorrect username or password!';
  }
});

function loadDashboardData(){
  // Mock data, replace with real API later
  document.getElementById('totalServers').textContent = '152';
  document.getElementById('totalMembers').textContent = '12,456';
  document.getElementById('activeTickets').textContent = '23';
}

function logout(){
  dashboardSection.classList.add('hidden');
  loginSection.classList.remove('hidden');
  loginForm.reset();
  loginError.textContent = '';
}
