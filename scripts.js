// Customize these:
const INVITE_LINK = "https://discord.com/oauth2/authorize?client_id=1433875801496879224";
const WIDGET_SRC = ""; // optional: "https://discord.com/widget?id=SERVER_ID&theme=dark"

document.addEventListener('DOMContentLoaded', () => {
  // wire invite buttons
  document.querySelectorAll('[data-invite]').forEach(btn=>{
    btn.addEventListener('click', ()=> window.open(INVITE_LINK,'_blank'));
  });
  const inviteMain = document.getElementById('inviteLink');
  if(inviteMain) inviteMain.href = INVITE_LINK;
  const inviteBtnMain = document.getElementById('inviteBtnMain');
  if(inviteBtnMain) inviteBtnMain.href = INVITE_LINK;

  // mobile menu
  const ham = document.getElementById('hamburger');
  const mobile = document.getElementById('mobileMenu');
  ham && ham.addEventListener('click', ()=> mobile.classList.toggle('open'));

  // modal hooks
  window.openModal = (id)=> {
    const el = document.getElementById(id);
    if(el){ el.setAttribute('aria-hidden','false'); }
  };
  window.closeModal = (id)=> {
    const el = document.getElementById(id);
    if(el){ el.setAttribute('aria-hidden','true'); }
  };

  // support form (example)
  window.submitSupport = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    // For a static site we will just create a mailto link:
    const email = data.get('email');
    const message = encodeURIComponent(`Support request from ${email}\n\n${data.get('message')}`);
    window.location.href = `mailto:hello@nicknamebotxyz.co.uk?subject=Support%20Request&body=${message}`;
  };

  // copy invite helper
  window.copyInvite = ()=>{
    navigator.clipboard?.writeText(INVITE_LINK).then(()=>{
      alert('Invite link copied to clipboard');
    }).catch(()=> alert('Could not copy invite link — open the invite instead.'));
  };

  // theme toggle
  const toggle = document.getElementById('toggleTheme');
  toggle && toggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? '🌙' : '🌤';
  });

  // embed discord widget if available
  if(WIDGET_SRC){
    const el = document.querySelector('.discord-embed');
    if(el){
      el.innerHTML = `<iframe src="${WIDGET_SRC}" width="100%" height="100%" allowtransparency="true" frameborder="0"></iframe>`;
    }
  }
});
