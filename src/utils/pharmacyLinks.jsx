// Pharmacy logo components — separate from the buy button
function Logo1mg() {
  return (
    <div className="pharmacy-logo-badge" style={{ borderColor: '#E44D5C22', background: '#FEF2F2' }}>
      <svg viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4">
        <text x="0" y="15" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="14" fill="#E44D5C">1mg</text>
      </svg>
    </div>
  );
}

function LogoPharmEasy() {
  return (
    <div className="pharmacy-logo-badge" style={{ borderColor: '#10847E22', background: '#F0FDFA' }}>
      <svg viewBox="0 0 90 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3.5">
        <text x="0" y="15" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="12" fill="#10847E">PharmEasy</text>
      </svg>
    </div>
  );
}

function LogoNetmeds() {
  return (
    <div className="pharmacy-logo-badge" style={{ borderColor: '#2D9B6D22', background: '#F0FDF4' }}>
      <svg viewBox="0 0 70 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3.5">
        <text x="0" y="15" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="12" fill="#2D9B6D">Netmeds</text>
      </svg>
    </div>
  );
}

const pharmacyLinks = {
  '1mg': {
    name: 'Tata 1mg',
    buildUrl: (drug) => `https://www.1mg.com/search/all?name=${encodeURIComponent(drug)}`,
    color: '#E44D5C',
    LogoComponent: Logo1mg,
  },
  pharmeasy: {
    name: 'PharmEasy',
    buildUrl: (drug) => `https://pharmeasy.in/search/all?name=${encodeURIComponent(drug)}`,
    color: '#10847E',
    LogoComponent: LogoPharmEasy,
  },
  netmeds: {
    name: 'Netmeds',
    buildUrl: (drug) => `https://www.netmeds.com/catalogsearch/result?q=${encodeURIComponent(drug)}`,
    color: '#2D9B6D',
    LogoComponent: LogoNetmeds,
  },
};

const pharmacyKeys = Object.keys(pharmacyLinks);

export function getPharmacyForIndex(index) {
  const key = pharmacyKeys[index % pharmacyKeys.length];
  return { key, ...pharmacyLinks[key] };
}

export default pharmacyLinks;
