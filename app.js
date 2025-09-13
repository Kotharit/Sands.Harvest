// Application data from the provided JSON
const applicationData = {
  "overview": {
    "title": "Sands of Dumas: A Geological Journey",
    "subtitle": "Exploring six distinct sediment types around Dumas Beach and Surat, Gujarat",
    "keyStats": {
      "coastlineLength": "1,663 km",
      "stableCoastline": "87%",
      "materialsStudied": 6,
      "researchSources": 12
    },
    "executiveSummary": "This comprehensive study examines six distinct sand and soil materials around Dumas Beach and Surat, Gujarat, revealing unique geological characteristics including the famous black sand phenomenon and diverse coastal sedimentology."
  },
  "materials": [
    {
      "id": "beach_sands",
      "name": "Beach Sands (Generic Coastal)",
      "color": "#D2B48C",
      "coordinates": [21.0833, 72.7667],
      "identification": "Generic coastal sands along the Arabian Sea coast of Gujarat, representing typical marine sediments deposited through wave action and longshore drift processes.",
      "physicalProperties": {
        "grainSize": "Well to moderately well sorted fine to medium sands (1.0-2.5φ)",
        "mineralogy": "Predominantly quartz (60-80%), with minor feldspar, heavy minerals, and shell fragments",
        "color": "Light brown to gray; iron oxide staining creates reddish hues"
      },
      "provenance": {
        "sources": "Western Ghats erosion, Deccan Trap weathering, minor Indus Delta contributions",
        "transport": "Wave-dominated processes, seasonal monsoon currents, limited aeolian input",
        "longRange": "Minimal direct Thar Desert contribution due to distance and topographic barriers"
      },
      "uses": {
        "engineering": "Suitable for concrete aggregate when properly graded and washed",
        "ecological": "Supports coastal dune vegetation and provides nesting habitat for sea turtles",
        "hazards": "Erosion during storm events, potential contamination near urban areas"
      },
      "samplingMethods": "Beach profile sampling at 50cm intervals from high tide line to backshore. Standard sieve analysis (4φ to -1φ), heavy mineral separation, XRD for mineralogy",
      "keyFacts": "Gujarat's 1,663 km coastline processes millions of tons of sand annually through natural wave action, creating some of India's most stable beach systems.",
      "dataAvailability": {
        "physical": 40,
        "grainSize": 20,
        "mineralogy": 40,
        "provenance": 30
      }
    },
    {
      "id": "dumas_sand",
      "name": "Dumas Beach Sand (Black Sand)",
      "color": "#2F2F2F",
      "coordinates": [21.0906, 72.7603],
      "identification": "Distinctive black sand beach located 21 km southwest of Surat, famous for its dark coloration and unique mineral composition attributed to high iron content.",
      "physicalProperties": {
        "grainSize": "Data unavailable - Estimated medium sand (1.0-2.0φ) based on regional patterns",
        "mineralogy": "High iron oxide content (hematite, magnetite), quartz, heavy minerals including ilmenite",
        "color": "Characteristic black to dark gray due to iron oxide minerals and possible organic matter"
      },
      "provenance": {
        "sources": "Hypothesis - Deccan Trap weathering, heavy mineral concentration, possible Tapi River input",
        "transport": "Selective wave sorting concentrating heavy minerals, seasonal river discharge",
        "longRange": "Wave-driven heavy mineral placers, winnowing of lighter quartz grains"
      },
      "uses": {
        "tourism": "Major attraction for Gujarat tourism industry",
        "mining": "Heavy mineral content may have economic value (requires investigation)",
        "hazards": "Urban pollution from Surat industrial activities, limited ecological value"
      },
      "samplingMethods": "Systematic sampling across beach profile, depth profiles to 30cm. Heavy mineral separation, magnetic susceptibility, iron oxide quantification",
      "keyFacts": "Dumas Beach's mysterious black sand contains iron concentrations that create its otherworldly appearance, making it one of only a few naturally black beaches in India.",
      "dataAvailability": {
        "physical": 30,
        "grainSize": 0,
        "mineralogy": 30,
        "provenance": 20
      }
    },
    {
      "id": "volleyball_sand",
      "name": "Volleyball Court Sand",
      "color": "#F5DEB3",
      "coordinates": [21.1702, 72.8311],
      "identification": "Specialized imported sand designed for beach volleyball courts, engineered to provide optimal playing conditions with specific grain size and safety characteristics.",
      "physicalProperties": {
        "grainSize": "Highly controlled 0.5-1.0mm (0-1φ), well-sorted (σ<0.35φ)",
        "mineralogy": "Predominantly rounded quartz (>90%), minimal dust content (<3%)",
        "color": "Light tan to white, specifically selected for non-abrasive properties and heat reflection"
      },
      "provenance": {
        "sources": "River quarries or manufactured from crushed rock, quality-controlled production",
        "transport": "Commercial supply chains, often imported from specialized sand producers",
        "longRange": "Washed, sieved, dust-removed, rounded through mechanical processing"
      },
      "uses": {
        "sports": "Optimal traction and cushioning for athletic activities",
        "safety": "Non-abrasive surface reduces injury risk during diving and sliding",
        "drainage": "Excellent water drainage prevents court flooding during rain"
      },
      "samplingMethods": "Regular sieve analysis to maintain grain size specifications. Abrasion testing, dust content measurement, pH testing",
      "keyFacts": "Professional beach volleyball sand requires grain sizes between 0.5-1.0mm—precise enough that a single court uses approximately 200 tons of specially selected and processed sand.",
      "dataAvailability": {
        "physical": 90,
        "grainSize": 95,
        "mineralogy": 85,
        "provenance": 80
      }
    },
    {
      "id": "red_soil",
      "name": "Red Soil (Local Inland)",
      "color": "#CD5C5C",
      "coordinates": [21.2, 72.9],
      "identification": "Iron-rich soils characteristic of Gujarat's interior regions, developed from weathering of Deccan Trap basalts and crystalline rocks under semi-arid tropical conditions.",
      "physicalProperties": {
        "grainSize": "Clay to sandy loam texture, with regional variations",
        "mineralogy": "Iron oxides (hematite, goethite), kaolinite, quartz, residual feldspar",
        "color": "Red to reddish-brown due to iron oxide content (5-15% Fe₂O₃)"
      },
      "provenance": {
        "sources": "In-situ weathering of Deccan Trap basalts, granite weathering in northern Gujarat",
        "transport": "Laterization processes under warm, humid conditions with distinct wet-dry cycles",
        "longRange": "Pleistocene to Recent, with ongoing pedogenic processes"
      },
      "uses": {
        "agriculture": "Suitable for cotton, groundnut, sesame with proper fertilization",
        "construction": "Local building material, brick manufacturing",
        "challenges": "Low water retention, nutrient deficiency, erosion susceptibility"
      },
      "samplingMethods": "Profile description to 150cm depth, horizon identification. Particle size analysis, chemical analysis (NPK, pH, organic matter), X-ray diffraction",
      "keyFacts": "Gujarat's red soils cover approximately 35,000 square kilometers and support the cultivation of over 2 million hectares of cotton and oilseed crops.",
      "dataAvailability": {
        "physical": 80,
        "grainSize": 50,
        "mineralogy": 85,
        "provenance": 90
      }
    },
    {
      "id": "coastal_grasses",
      "name": "Coastal Grasses & Dune Vegetation",
      "color": "#9ACD32",
      "coordinates": [21.08, 72.75],
      "identification": "Salt-tolerant, sand-binding grasses that colonize and stabilize coastal dunes, dominated by species like Spinifex littoreus, Ipomoea pes-caprae, and Panicum amarum.",
      "physicalProperties": {
        "spinifex": "Rhizomatous perennial with runners extending up to 20m, silky leaves, distinctive seed heads",
        "ipomoea": "Creeping vine with purple flowers, succulent leaves, extensive stolon system",
        "panicum": "Clump-forming grass 3-6 feet tall, blue-green foliage, excellent salt tolerance"
      },
      "provenance": {
        "distribution": "Pioneer zone (most seaward), primary dune, secondary dune habitats",
        "biogeography": "Indo-Pacific distribution for Spinifex and Ipomoea, Atlantic coastal for Panicum",
        "zonation": "Species succession from beach to inland based on salt tolerance"
      },
      "uses": {
        "stabilization": "Root systems bind loose sand, prevent erosion",
        "ecological": "Provide habitat for nesting birds, reduce storm surge impacts",
        "protection": "Natural barrier against wave action and wind erosion"
      },
      "samplingMethods": "Quadrat sampling, species identification, coverage assessment. Excavation studies of rhizome/stolon systems",
      "keyFacts": "A single Spinifex plant can extend its runners across 20 meters of sand dune, creating a natural net that holds together thousands of tons of sand against coastal storms.",
      "dataAvailability": {
        "physical": 85,
        "grainSize": 0,
        "mineralogy": 0,
        "provenance": 90
      }
    },
    {
      "id": "riverine_sediment",
      "name": "Riverine/Urban Sediment (Tapi River)",
      "color": "#8FBC8F",
      "coordinates": [21.1028, 72.7397],
      "identification": "Mixed riverine and urban sediments from the Tapi River system and Surat's reclaimed lands, characterized by complex mineralogy and anthropogenic influences.",
      "physicalProperties": {
        "grainSize": "Silt to fine sand (2-4φ), poorly sorted due to multiple sources",
        "mineralogy": "Quartz, kaolinite, calcite, vermiculite, palygorskite, with heavy metal contamination",
        "contamination": "Elevated levels of industrial pollutants, organic matter from urban runoff"
      },
      "provenance": {
        "sources": "Tapi River catchment in Western Ghats, urban runoff, industrial discharge",
        "transport": "Seasonal flood flows, tidal influence up to 25km upstream",
        "anthropogenic": "Textile industry effluents, municipal sewage, agricultural runoff"
      },
      "uses": {
        "reclamation": "Used for coastal land development projects",
        "industrial": "Potential use in construction after treatment",
        "environmental": "Heavy metal contamination, eutrophication, ecosystem impacts"
      },
      "samplingMethods": "Multiple depth sampling, seasonal variation studies. Heavy metal analysis (ICP-MS), organic pollutant testing",
      "keyFacts": "The Tapi River carries over 2,000 tons of sediment daily through Surat city, creating complex depositional patterns that reflect both natural geological processes and human industrial activity.",
      "dataAvailability": {
        "physical": 70,
        "grainSize": 40,
        "mineralogy": 80,
        "provenance": 85
      }
    }
  ]
};

// Application state
let currentSection = 'overview';
let currentFilter = 'all';
let comparisonData = { material1: null, material2: null };

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application initializing...');
    initializeNavigation();
    initializeMaterials();
    initializeComparison();
    initializeModal();
    initializeMapPins();
    
    // Initialize charts after a small delay to ensure DOM is ready
    setTimeout(() => {
        initializeCharts();
    }, 100);
});

// Navigation functionality
function initializeNavigation() {
    console.log('Initializing navigation...');
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    console.log('Found nav buttons:', navButtons.length);
    console.log('Found sections:', sections.length);
    
    navButtons.forEach((button, index) => {
        console.log(`Nav button ${index}:`, button.dataset.section);
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = button.dataset.section;
            console.log('Navigation clicked:', targetSection);
            navigateToSection(targetSection);
        });
    });
    
    // Ensure overview is active by default
    navigateToSection('overview');
}

function navigateToSection(sectionId) {
    console.log('Navigating to section:', sectionId);
    
    // Update current section
    currentSection = sectionId;
    
    // Get all navigation buttons and sections
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    // Update nav buttons
    navButtons.forEach(btn => {
        const isActive = btn.dataset.section === sectionId;
        btn.classList.toggle('nav-btn--active', isActive);
        console.log(`Nav button ${btn.dataset.section} active:`, isActive);
    });
    
    // Update sections
    sections.forEach(section => {
        const isActive = section.id === sectionId;
        section.classList.toggle('section--active', isActive);
        console.log(`Section ${section.id} active:`, isActive);
    });
    
    // Add fade-in animation
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('fade-in');
        setTimeout(() => activeSection.classList.remove('fade-in'), 300);
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    console.log('Navigation complete for:', sectionId);
}

// Materials functionality
function initializeMaterials() {
    console.log('Initializing materials...');
    renderMaterialCards();
    initializeMaterialFilters();
}

function initializeMaterialFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    console.log('Found filter buttons:', filterButtons.length);
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            console.log('Filter clicked:', filter);
            setMaterialFilter(filter);
        });
    });
}

function setMaterialFilter(filter) {
    console.log('Setting filter:', filter);
    currentFilter = filter;
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.toggle('filter-btn--active', btn.dataset.filter === filter);
    });
    
    // Update material cards visibility
    const materialCards = document.querySelectorAll('.material-card');
    materialCards.forEach(card => {
        const materialId = card.dataset.materialId;
        const shouldShow = filter === 'all' || materialId === filter;
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

function renderMaterialCards() {
    const materialsGrid = document.getElementById('materialsGrid');
    if (!materialsGrid) {
        console.error('Materials grid not found');
        return;
    }
    
    console.log('Rendering material cards...');
    materialsGrid.innerHTML = '';
    
    applicationData.materials.forEach(material => {
        const card = createMaterialCard(material);
        materialsGrid.appendChild(card);
    });
    
    console.log('Material cards rendered:', applicationData.materials.length);
}

function createMaterialCard(material) {
    const card = document.createElement('div');
    card.className = 'material-card';
    card.dataset.materialId = material.id;
    
    card.innerHTML = `
        <div class="material-card__header">
            <div class="material-card__color-bar" style="background-color: ${material.color}"></div>
            <h3 class="material-card__title">${material.name}</h3>
            <div class="material-card__coordinates">${material.coordinates[0]}°N, ${material.coordinates[1]}°E</div>
        </div>
        <div class="material-card__body">
            <div class="material-card__description">
                ${material.identification}
            </div>
            <div class="material-card__facts">
                ${material.keyFacts}
            </div>
            <div class="data-availability">
                <h4>Data Availability</h4>
                <div class="availability-bars">
                    ${Object.entries(material.dataAvailability).map(([key, value]) => `
                        <div class="availability-bar">
                            <div class="availability-bar__label">${key}</div>
                            <div class="availability-bar__track">
                                <div class="availability-bar__fill" style="width: ${value}%"></div>
                            </div>
                            <div class="availability-bar__value">${value}%</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        console.log('Material card clicked:', material.name);
        openMaterialModal(material);
    });
    
    return card;
}

// Comparison functionality
function initializeComparison() {
    console.log('Initializing comparison...');
    const material1Select = document.getElementById('material1');
    const material2Select = document.getElementById('material2');
    const compareBtn = document.getElementById('compareBtn');
    
    if (!material1Select || !material2Select || !compareBtn) {
        console.error('Comparison elements not found');
        return;
    }
    
    // Populate select options
    applicationData.materials.forEach(material => {
        const option1 = document.createElement('option');
        option1.value = material.id;
        option1.textContent = material.name;
        material1Select.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = material.id;
        option2.textContent = material.name;
        material2Select.appendChild(option2);
    });
    
    compareBtn.addEventListener('click', performComparison);
}

function performComparison() {
    console.log('Performing comparison...');
    const material1Select = document.getElementById('material1');
    const material2Select = document.getElementById('material2');
    const comparisonResults = document.getElementById('comparisonResults');
    
    const material1Id = material1Select.value;
    const material2Id = material2Select.value;
    
    if (!material1Id || !material2Id) {
        alert('Please select two materials to compare');
        return;
    }
    
    if (material1Id === material2Id) {
        alert('Please select different materials to compare');
        return;
    }
    
    const material1 = applicationData.materials.find(m => m.id === material1Id);
    const material2 = applicationData.materials.find(m => m.id === material2Id);
    
    renderComparison(material1, material2);
}

function renderComparison(material1, material2) {
    const comparisonResults = document.getElementById('comparisonResults');
    comparisonResults.classList.remove('hidden');
    
    comparisonResults.innerHTML = `
        <div class="comparison-card">
            <h3>
                <div class="comparison-card__color" style="background-color: ${material1.color}"></div>
                ${material1.name}
            </h3>
            ${renderComparisonSections(material1)}
        </div>
        <div class="comparison-card">
            <h3>
                <div class="comparison-card__color" style="background-color: ${material2.color}"></div>
                ${material2.name}
            </h3>
            ${renderComparisonSections(material2)}
        </div>
    `;
}

function renderComparisonSections(material) {
    return `
        <div class="comparison-section">
            <h4>Physical Properties</h4>
            <p><strong>Grain Size:</strong> ${material.physicalProperties.grainSize}</p>
            <p><strong>Mineralogy:</strong> ${material.physicalProperties.mineralogy}</p>
            <p><strong>Color:</strong> ${material.physicalProperties.color || material.physicalProperties.spinifex || 'Various characteristics'}</p>
        </div>
        <div class="comparison-section">
            <h4>Provenance</h4>
            <p><strong>Sources:</strong> ${material.provenance.sources || material.provenance.distribution}</p>
            <p><strong>Transport:</strong> ${material.provenance.transport || material.provenance.biogeography}</p>
        </div>
        <div class="comparison-section">
            <h4>Key Facts</h4>
            <p>${material.keyFacts}</p>
        </div>
    `;
}

// Charts functionality
function initializeCharts() {
    console.log('Initializing charts...');
    
    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') {
        console.error('Chart.js not loaded');
        return;
    }
    
    try {
        createDataAvailabilityChart();
        createMaterialDistributionChart();
        console.log('Charts initialized successfully');
    } catch (error) {
        console.error('Error initializing charts:', error);
    }
}

function createDataAvailabilityChart() {
    const canvas = document.getElementById('dataAvailabilityChart');
    if (!canvas) {
        console.error('Data availability chart canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    const materials = applicationData.materials.map(m => m.name.split(' ').slice(0, 2).join(' '));
    const physicalData = applicationData.materials.map(m => m.dataAvailability.physical);
    const grainSizeData = applicationData.materials.map(m => m.dataAvailability.grainSize);
    const mineralogyData = applicationData.materials.map(m => m.dataAvailability.mineralogy);
    const provenanceData = applicationData.materials.map(m => m.dataAvailability.provenance);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: materials,
            datasets: [
                {
                    label: 'Physical',
                    data: physicalData,
                    backgroundColor: '#1FB8CD'
                },
                {
                    label: 'Grain Size',
                    data: grainSizeData,
                    backgroundColor: '#FFC185'
                },
                {
                    label: 'Mineralogy',
                    data: mineralogyData,
                    backgroundColor: '#B4413C'
                },
                {
                    label: 'Provenance',
                    data: provenanceData,
                    backgroundColor: '#ECEBD5'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Data Availability (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Material Types'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Research Data Availability by Material Type'
                }
            }
        }
    });
}

function createMaterialDistributionChart() {
    const canvas = document.getElementById('materialDistributionChart');
    if (!canvas) {
        console.error('Material distribution chart canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    const materials = applicationData.materials.map(m => m.name.split(' ').slice(0, 2).join(' '));
    const colors = applicationData.materials.map(m => m.color);
    const averageAvailability = applicationData.materials.map(m => {
        const availability = m.dataAvailability;
        return (availability.physical + availability.grainSize + availability.mineralogy + availability.provenance) / 4;
    });
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: materials,
            datasets: [{
                data: averageAvailability,
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Average Data Availability by Material'
                }
            }
        }
    });
}

// Modal functionality
function initializeModal() {
    const materialModal = document.getElementById('materialModal');
    const modalCloseBtn = document.querySelector('.modal__close');
    const modalBackdrop = document.querySelector('.modal__backdrop');
    
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }
    
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeModal);
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function openMaterialModal(material) {
    console.log('Opening modal for:', material.name);
    const materialModal = document.getElementById('materialModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!materialModal || !modalContent) {
        console.error('Modal elements not found');
        return;
    }
    
    modalContent.innerHTML = `
        <div style="margin-bottom: 24px;">
            <h2 style="color: ${material.color}; margin-bottom: 8px;">${material.name}</h2>
            <p style="color: var(--color-text-secondary); font-family: var(--font-family-mono);">
                ${material.coordinates[0]}°N, ${material.coordinates[1]}°E
            </p>
        </div>
        
        <div class="modal-section">
            <h3>Identification</h3>
            <p>${material.identification}</p>
        </div>
        
        <div class="modal-section">
            <h3>Physical Properties</h3>
            <p><strong>Grain Size:</strong> ${material.physicalProperties.grainSize || 'Various plant characteristics'}</p>
            <p><strong>Mineralogy:</strong> ${material.physicalProperties.mineralogy || material.physicalProperties.spinifex || 'Biological characteristics'}</p>
            <p><strong>Color:</strong> ${material.physicalProperties.color || material.physicalProperties.ipomoea || 'Natural vegetation colors'}</p>
        </div>
        
        <div class="modal-section">
            <h3>Provenance & Transport</h3>
            <p><strong>Sources:</strong> ${material.provenance.sources || material.provenance.distribution}</p>
            <p><strong>Transport:</strong> ${material.provenance.transport || material.provenance.biogeography}</p>
            ${material.provenance.longRange ? `<p><strong>Long-range processes:</strong> ${material.provenance.longRange}</p>` : ''}
            ${material.provenance.anthropogenic ? `<p><strong>Human influence:</strong> ${material.provenance.anthropogenic}</p>` : ''}
        </div>
        
        <div class="modal-section">
            <h3>Uses & Applications</h3>
            ${Object.entries(material.uses).map(([key, value]) => `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`).join('')}
        </div>
        
        <div class="modal-section">
            <h3>Sampling Methods</h3>
            <p>${material.samplingMethods}</p>
        </div>
        
        <div class="modal-section">
            <h3>Key Facts</h3>
            <p style="font-style: italic; background: var(--color-bg-2); padding: 16px; border-radius: 8px; border-left: 4px solid ${material.color};">
                ${material.keyFacts}
            </p>
        </div>
    `;
    
    materialModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const materialModal = document.getElementById('materialModal');
    if (materialModal) {
        materialModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Map pins functionality
function initializeMapPins() {
    console.log('Initializing map pins...');
    const mapPins = document.querySelectorAll('.map-pin');
    console.log('Found map pins:', mapPins.length);
    
    mapPins.forEach((pin, index) => {
        console.log(`Map pin ${index}:`, pin.dataset.material);
        pin.addEventListener('click', () => {
            const materialId = pin.dataset.material;
            console.log('Map pin clicked:', materialId);
            const material = applicationData.materials.find(m => m.id === materialId);
            if (material) {
                openMaterialModal(material);
            }
        });
    });
}

// Export functions for potential use in other scripts
window.GeologicalDashboard = {
    navigateToSection,
    setMaterialFilter,
    openMaterialModal,
    closeModal,
    applicationData
};