// Country phone code registry for registration modal
const COUNTRY_CODES = [
  { name: 'India', code: '+91' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'United States', code: '+1' },
  { name: 'Canada', code: '+1' },
  { name: 'United Arab Emirates', code: '+971' },
  { name: 'Singapore', code: '+65' },
  { name: 'Australia', code: '+61' },
  { name: 'Hong Kong', code: '+852' },
  { name: 'Germany', code: '+49' },
  { name: 'France', code: '+33' },
  { name: 'Switzerland', code: '+41' },
  { name: 'Saudi Arabia', code: '+966' },
  { name: 'Qatar', code: '+974' },
  { name: 'Oman', code: '+968' },
  { name: 'Kuwait', code: '+965' },
  { name: 'Bahrain', code: '+973' },
  { name: 'Malaysia', code: '+60' },
  { name: 'China', code: '+86' },
  { name: 'Japan', code: '+81' },
  { name: 'South Korea', code: '+82' },
  { name: 'New Zealand', code: '+64' },
  { name: 'South Africa', code: '+27' },
  { name: 'Nigeria', code: '+234' },
  { name: 'Kenya', code: '+254' },
  { name: 'Egypt', code: '+20' }
];

document.addEventListener('DOMContentLoaded', () => {
  const regCC = document.getElementById('regCC');
  if (regCC) {
    regCC.innerHTML = '';
    COUNTRY_CODES.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.code;
      opt.textContent = `${c.code} (${c.name})`;
      if (c.code === '+91') opt.selected = true;
      regCC.appendChild(opt);
    });
  }
});
