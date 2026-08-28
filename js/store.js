// js/store.js - Shared Data Store & Client-side Engine

const INITIAL_RESORTS = [
  {
    id: 'gv-dooars',
    name: 'Green Valley Forest Resort',
    destination: 'Dooars',
    destinationSlug: 'dooars',
    area: 'Lataguri',
    tier: 'midscale',
    rating: 4.6,
    reviewCount: 312,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    amenities: ['Swimming Pool', 'Complimentary Breakfast', 'Free Wi-Fi', 'Safari Escort', 'Bonfire'],
    roomName: 'Deluxe Forest Cottage',
    pricePerNight: 4200,
    isFamily: true,
    isCouple: true,
    isPet: false,
    pros: ['Proximity to Gorumara safari gate', 'Clean swimming pool & lawn', 'Authentic Bengali thali meals'],
    cons: ['Cellular reception drops in corner cottages']
  },
  {
    id: 'jc-dooars',
    name: 'The Jungle Crown Eco Resort',
    destination: 'Dooars',
    destinationSlug: 'dooars',
    area: 'Lataguri',
    tier: 'luxury',
    rating: 4.8,
    reviewCount: 198,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800',
    amenities: ['Swimming Pool', 'Gourmet Dining', 'Naturalist Escort', 'Free Wi-Fi', 'Pet Friendly'],
    roomName: 'Luxury Machan Villa',
    pricePerNight: 6800,
    isFamily: true,
    isCouple: true,
    isPet: true,
    pros: ['Panoramic view of tea gardens', 'Dedicated wildlife naturalist', 'Spacious boutique villas'],
    cons: ['Higher price tier', 'Advance booking required for safaris']
  },
  {
    id: 'mr-dooars',
    name: 'Murti Forest Budget Retreat',
    destination: 'Dooars',
    destinationSlug: 'dooars',
    area: 'Murti',
    tier: 'budget',
    rating: 4.2,
    reviewCount: 145,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800',
    amenities: ['River Walk Access', 'Complimentary Breakfast', 'Free Wi-Fi', 'Bonfire'],
    roomName: 'Standard AC Riverside Room',
    pricePerNight: 2400,
    isFamily: true,
    isCouple: true,
    isPet: false,
    pros: ['Direct walking access to Murti River bank', 'Very affordable value', 'Quiet and peaceful'],
    cons: ['No swimming pool', 'Limited food menu after 9 PM']
  },
  {
    id: 'sb-mandarmani',
    name: 'Sea Breeze Coastal Resort',
    destination: 'Mandarmani',
    destinationSlug: 'mandarmani',
    area: 'Mandarmani Beachfront',
    tier: 'luxury',
    rating: 4.5,
    reviewCount: 420,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    amenities: ['Swimming Pool', 'Direct Beach Entry', 'Free Wi-Fi', 'Seafood Restaurant'],
    roomName: 'Ocean View Suite',
    pricePerNight: 5500,
    isFamily: true,
    isCouple: true,
    isPet: true,
    pros: ['Direct private entry onto beach', 'Spectacular swimming pool', 'Fresh crab & prawn curry'],
    cons: ['Approach road has rough patches']
  },
  {
    id: 'sr-shantiniketan',
    name: 'Sonar Tori Heritage Retreat',
    destination: 'Shantiniketan',
    destinationSlug: 'shantiniketan',
    area: 'Prantik',
    tier: 'midscale',
    rating: 4.6,
    reviewCount: 260,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    amenities: ['Cultural Baul Evenings', 'Complimentary Breakfast', 'Free Wi-Fi', 'Bonfire'],
    roomName: 'Heritage Terracotta Cottage',
    pricePerNight: 3600,
    isFamily: true,
    isCouple: true,
    isPet: false,
    pros: ['Authentic terracotta architecture', 'Live Baul music in courtyard', 'Close to Kopai river'],
    cons: ['Limited parking spaces during festival weeks']
  },
  {
    id: 'dh-darjeeling',
    name: 'Himalayan View Heritage Lodge',
    destination: 'Darjeeling',
    destinationSlug: 'darjeeling',
    area: 'Mall Road',
    tier: 'midscale',
    rating: 4.7,
    reviewCount: 380,
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800',
    amenities: ['Kanchenjunga View', 'Complimentary Breakfast', 'Free Wi-Fi', 'Heated Rooms'],
    roomName: 'Mountain Vista Premium Room',
    pricePerNight: 4500,
    isFamily: true,
    isCouple: true,
    isPet: false,
    pros: ['Unobstructed view of Kanchenjunga', '2 minutes walk to Mall Road', 'Warm wooden interiors'],
    cons: ['Steep walking climb to vehicle parking']
  }
];

const INITIAL_DESTINATIONS = [
  {
    id: 'dest-dooars',
    slug: 'dooars',
    name: 'Dooars & Lataguri',
    tagline: 'Wildlife sanctuaries, tea gardens, and river plains',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    bestTime: 'October to May',
    howToReach: 'New Mal Junction / NJP Railway Station, Bagdogra Airport (~2 hrs)',
    description: 'Gateway to North-East India with one-horned rhinoceros and riverside valleys.',
    attractions: ['Gorumara National Park Safari', 'Murti River Pebble Beach', 'Jaldapara Elephant Corridor']
  },
  {
    id: 'dest-mandarmani',
    slug: 'mandarmani',
    name: 'Mandarmani',
    tagline: 'Wide drive-in beach and luxury coastal resorts',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    bestTime: 'July to March',
    howToReach: 'Approx 3.5 to 4 hours drive from Kolkata via NH16 and NH116B',
    description: 'Tranquil beach resort village famous for red crabs and calm waves.',
    attractions: ['Mandarmani Main Beach', 'Red Crab Delta', 'Digha Mohona']
  },
  {
    id: 'dest-shantiniketan',
    slug: 'shantiniketan',
    name: 'Shantiniketan',
    tagline: 'Tagore heritage, terracotta art, and Baul songs',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    bestTime: 'September to March',
    howToReach: 'Bolpur Shantiniketan Railway Station (2.5 hrs train from Howrah)',
    description: 'Nobel laureate Rabindranath Tagore university town with cultural crafts.',
    attractions: ['Visva-Bharati Ashram', 'Khowai Sonajhuri Haat', 'Kopai River']
  },
  {
    id: 'dest-darjeeling',
    slug: 'darjeeling',
    name: 'Darjeeling',
    tagline: 'Queen of Hills, Himalayan Toy Train, and Tea Gardens',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800',
    bestTime: 'March to June, September to December',
    howToReach: 'Bagdogra Airport / NJP Station (~3 hrs mountain drive)',
    description: 'Lesser Himalayas with world-famous Darjeeling tea and Mount Kanchenjunga views.',
    attractions: ['Tiger Hill Sunrise', 'Batasia Loop & Toy Train', 'Happy Valley Tea Estate']
  }
];

// Initial Demo Enquiries
const INITIAL_ENQUIRIES = [
  {
    id: 'enq_1001',
    name: 'Debashis Dasgupta',
    phone: '+91 98301 23456',
    email: 'debashis.dasgupta@gmail.com',
    resortName: 'Green Valley Forest Resort',
    destination: 'Dooars',
    durationNights: 3,
    guestsCount: 4,
    roomsCount: 2,
    totalCost: 24800,
    timestamp: '28/08/2026, 04:30 PM',
    status: 'Pending',
    partnerNotes: '',
    updatedPackage: null
  }
];

if (!localStorage.getItem('mmv_resorts')) {
  localStorage.setItem('mmv_resorts', JSON.stringify(INITIAL_RESORTS));
}
if (!localStorage.getItem('mmv_destinations')) {
  localStorage.setItem('mmv_destinations', JSON.stringify(INITIAL_DESTINATIONS));
}
if (!localStorage.getItem('mmv_saved_trips')) {
  localStorage.setItem('mmv_saved_trips', JSON.stringify([]));
}
if (!localStorage.getItem('mmv_enquiries')) {
  localStorage.setItem('mmv_enquiries', JSON.stringify(INITIAL_ENQUIRIES));
}

// Global Store Helper
window.MMV = {
  getResorts: () => JSON.parse(localStorage.getItem('mmv_resorts') || '[]'),
  getDestinations: () => JSON.parse(localStorage.getItem('mmv_destinations') || '[]'),
  getSavedTrips: () => JSON.parse(localStorage.getItem('mmv_saved_trips') || '[]'),
  getEnquiries: () => JSON.parse(localStorage.getItem('mmv_enquiries') || '[]'),

  saveTrip: (trip) => {
    const list = window.MMV.getSavedTrips();
    list.unshift({ ...trip, id: 'trip_' + Date.now(), savedAt: new Date().toLocaleDateString() });
    localStorage.setItem('mmv_saved_trips', JSON.stringify(list));
    window.MMV.updateNavBadges();
  },

  deleteTrip: (id) => {
    const list = window.MMV.getSavedTrips().filter(t => t.id !== id);
    localStorage.setItem('mmv_saved_trips', JSON.stringify(list));
    window.MMV.updateNavBadges();
  },

  addResort: (resort) => {
    const list = window.MMV.getResorts();
    list.unshift({ ...resort, id: 'resort_' + Date.now() });
    localStorage.setItem('mmv_resorts', JSON.stringify(list));
  },

  deleteResort: (id) => {
    const list = window.MMV.getResorts().filter(r => r.id !== id);
    localStorage.setItem('mmv_resorts', JSON.stringify(list));
  },

  addEnquiry: (enquiry) => {
    const list = window.MMV.getEnquiries();
    list.unshift({
      ...enquiry,
      id: 'enq_' + Date.now(),
      timestamp: new Date().toLocaleString(),
      status: 'Pending',
      partnerNotes: '',
      updatedPackage: null
    });
    localStorage.setItem('mmv_enquiries', JSON.stringify(list));
  },

  updateEnquiry: (id, updatedFields) => {
    const list = window.MMV.getEnquiries().map(item => {
      if (item.id === id) {
        return { ...item, ...updatedFields };
      }
      return item;
    });
    localStorage.setItem('mmv_enquiries', JSON.stringify(list));
  },

  updateNavBadges: () => {
    const badge = document.getElementById('saved-trips-count');
    if (badge) {
      const count = window.MMV.getSavedTrips().length;
      badge.innerText = count;
      badge.style.display = count > 0 ? 'inline-block' : 'none';
    }
  }
};
