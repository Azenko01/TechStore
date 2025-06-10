// Enhanced JavaScript for TechStore

// Sample product data with real images
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "smartphones",
    brand: "apple",
    price: 1199,
    originalPrice: 1299,
    rating: 4.9,
    reviewCount: 2847,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2015%20Pro%20Max.jpg-rsh2o52sh1pRXCrBXN6LhMuwJOzNGJ.jpeg",
    description: "The most advanced iPhone yet with titanium design, A17 Pro chip, and revolutionary camera system.",
    specifications: {
      Display: "6.7-inch Super Retina XDR",
      Chip: "A17 Pro with 6-core GPU",
      Storage: "256GB, 512GB, 1TB",
      Camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
      Battery: "Up to 29 hours video playback",
      OS: "iOS 17",
      Colors: "Natural Titanium, Blue Titanium, White Titanium, Black Titanium",
    },
    features: ["5G Ready", "Face ID", "Wireless Charging", "Water Resistant"],
    inStock: true,
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    category: "smartphones",
    brand: "samsung",
    price: 1299,
    originalPrice: 1399,
    rating: 4.8,
    reviewCount: 1923,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Samsung%20Galaxy%20S24%20Ultra.jpg-4bIsDBhpF2Z6R8EcSdJMqYphPUkFGF.jpeg",
    description: "Ultimate smartphone with S Pen, AI-powered features, and professional-grade camera system.",
    specifications: {
      Display: "6.8-inch Dynamic AMOLED 2X",
      Processor: "Snapdragon 8 Gen 3",
      RAM: "12GB",
      Storage: "256GB, 512GB, 1TB",
      Camera: "200MP Main, 50MP Periscope Telephoto, 12MP Ultra Wide",
      Battery: "5000mAh with 45W fast charging",
      OS: "Android 14 with One UI 6.1",
    },
    features: ["S Pen Included", "AI Photo Editing", "120Hz Display", "5G Ready"],
    inStock: true,
    isNew: true,
    isFeatured: true,
  },
  {
    id: 3,
    name: "MacBook Pro 16-inch M3 Max",
    category: "laptops",
    brand: "apple",
    price: 3499,
    originalPrice: 3699,
    rating: 4.9,
    reviewCount: 1456,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook%20Pro%2016-inch%20M3%20Max.jpg-PZu5JY2ilsWZH4dfXAVmuXxHCFG4jg.jpeg",
    description: "Professional laptop with M3 Max chip for ultimate performance in creative workflows.",
    specifications: {
      Display: "16.2-inch Liquid Retina XDR",
      Chip: "Apple M3 Max with 40-core GPU",
      Memory: "36GB unified memory",
      Storage: "1TB SSD",
      Battery: "Up to 22 hours",
      Ports: "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3",
      Weight: "4.7 lbs",
    },
    features: ["Studio-quality mics", "1080p FaceTime HD camera", "Six-speaker sound", "Touch ID"],
    inStock: true,
    isNew: false,
    isFeatured: true,
  },
  {
    id: 4,
    name: "Dell XPS 13 Plus",
    category: "laptops",
    brand: "dell",
    price: 1599,
    originalPrice: 1799,
    rating: 4.6,
    reviewCount: 892,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dell%20XPS%2013%20Plus-KuAxYTYuvRp2O4U6p9rZTYQDT9vRhO.webp",
    description: "Ultra-portable laptop with stunning InfinityEdge display and premium build quality.",
    specifications: {
      Display: "13.4-inch 3.5K OLED InfinityEdge",
      Processor: "Intel Core i7-1360P",
      RAM: "32GB LPDDR5",
      Storage: "1TB PCIe SSD",
      Graphics: "Intel Iris Xe",
      Weight: "2.73 lbs",
      Battery: "Up to 12 hours",
    },
    features: ["OLED Display", "Thunderbolt 4", "Wi-Fi 6E", "Premium Audio"],
    inStock: true,
    isNew: false,
    isFeatured: true,
  },
  {
    id: 5,
    name: "LG OLED C4 65-inch",
    category: "tvs",
    brand: "lg",
    price: 2299,
    originalPrice: 2599,
    rating: 4.8,
    reviewCount: 743,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LG%20OLED%20C4%2065-inch-zhOKlpihvLmfJ1y3GbbYdJozE3YOjl.webp",
    description: "Premium OLED TV with perfect blacks, vibrant colors, and advanced gaming features.",
    specifications: {
      "Screen Size": "65 inches",
      Resolution: "4K Ultra HD (3840 x 2160)",
      "Display Type": "OLED evo with α9 AI Processor 4K Gen7",
      HDR: "Dolby Vision IQ, HDR10 Pro, HLG",
      "Smart TV": "webOS 24 with ThinQ AI",
      Gaming: "4x HDMI 2.1, 144Hz VRR, ALLM, G-SYNC Compatible",
    },
    features: ["Dolby Atmos", "Magic Remote", "Apple AirPlay 2", "Google Assistant"],
    inStock: true,
    isNew: true,
    isFeatured: true,
  },
  {
    id: 6,
    name: "Sony WH-1000XM5",
    category: "audio",
    brand: "sony",
    price: 399,
    originalPrice: 449,
    rating: 4.7,
    reviewCount: 3241,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sony%20WH-1000XM5.jpg-3LKim5cCKDPltde8KzLDB2HSUbT3rw.jpeg",
    description: "Industry-leading noise canceling wireless headphones with exceptional sound quality.",
    specifications: {
      Type: "Over-ear wireless headphones",
      "Noise Canceling": "Industry-leading with V1 processor + QN1 chip",
      "Battery Life": "Up to 30 hours with ANC",
      Connectivity: "Bluetooth 5.2, NFC, 3.5mm jack",
      Audio: "LDAC, Hi-Res Audio, 360 Reality Audio",
      Weight: "250g",
      "Quick Charge": "3 min charge = 3 hours playback",
    },
    features: ["Multipoint Connection", "Speak-to-Chat", "Adaptive Sound Control", "Touch Controls"],
    inStock: true,
    isNew: false,
    isFeatured: false,
  },
  {
    id: 7,
    name: "iPad Pro 12.9-inch M2",
    category: "accessories",
    brand: "apple",
    price: 1199,
    originalPrice: 1299,
    rating: 4.8,
    reviewCount: 1876,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPad%20Pro%2012.9-inch%20M2.jpg-Gykb1uK5D9Xhp7uZGWovz6jDw92Fat.jpeg",
    description: "Most advanced iPad with M2 chip, Liquid Retina XDR display, and Apple Pencil support.",
    specifications: {
      Display: "12.9-inch Liquid Retina XDR",
      Chip: "Apple M2 with 10-core GPU",
      Storage: "128GB, 256GB, 512GB, 1TB, 2TB",
      Camera: "12MP Wide, 10MP Ultra Wide, LiDAR Scanner",
      Connectivity: "Wi-Fi 6E, 5G (cellular models)",
      Compatibility: "Apple Pencil (2nd gen), Magic Keyboard",
      Battery: "Up to 10 hours",
    },
    features: ["Face ID", "USB-C with Thunderbolt", "ProRes Video", "Center Stage"],
    inStock: true,
    isNew: false,
    isFeatured: false,
  },
  {
    id: 8,
    name: "Samsung Odyssey G9 49-inch",
    category: "accessories",
    brand: "samsung",
    price: 1299,
    originalPrice: 1499,
    rating: 4.6,
    reviewCount: 567,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Samsung%20Odyssey%20G9%2049-inch.jpg-Vz13fbyuFDnK8zFVwnTnKZqycPpiGm.jpeg",
    description: "Ultra-wide curved gaming monitor with QLED technology and 240Hz refresh rate.",
    specifications: {
      "Screen Size": "49 inches",
      Resolution: "5120 x 1440 (Dual QHD)",
      "Panel Type": "VA QLED",
      "Refresh Rate": "240Hz",
      "Response Time": "1ms (GtG)",
      Connectivity: "2x HDMI 2.1, 1x DisplayPort 1.4, USB Hub",
      Features: "HDR1000, AMD FreeSync Premium Pro, G-SYNC Compatible",
    },
    features: ["1000R Curvature", "Quantum Dot Technology", "Eye Saver Mode", "Flicker Free"],
    inStock: true,
    isNew: true,
    isFeatured: false,
  },
]

// Shopping cart
let cart = JSON.parse(localStorage.getItem("techstore_cart")) || []

// Current filters and sorting
let currentFilters = {
  category: "all",
  priceMin: 0,
  priceMax: 5000,
  brands: [],
  search: "",
  inStock: false,
  rating: 0,
}

let currentSort = "featured"
let currentPage = 1
const productsPerPage = 6

// Animation observer
let animationObserver

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

// Initialize application
function initializeApp() {
  // Hide loading screen
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen")
    if (loadingScreen) {
      loadingScreen.classList.add("hidden")
    }
  }, 1500)

  // Initialize components
  updateCartCount()
  initializeAnimations()
  initializeScrollEffects()
  initializeParticles()

  // Check which page we're on and initialize accordingly
  const path = window.location.pathname
  const fileName = path.split("/").pop() || "index.html"

  if (fileName.includes("catalog.html")) {
    initializeCatalog()
  } else if (fileName.includes("product.html")) {
    initializeProductPage()
  } else {
    initializeHomePage()
  }

  // Initialize search functionality
  const searchInput = document.querySelector(".search-input")
  if (searchInput) {
    searchInput.addEventListener("input", debounce(handleSearch, 300))
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchProducts()
      }
    })
  }

  // Initialize back to top button
  initializeBackToTop()

  // Initialize header scroll effect
  initializeHeaderScroll()

  // Initialize smooth scrolling for anchor links
  initializeSmoothScrolling()

  // Initialize notification container
  initializeNotificationContainer()
}

// Initialize smooth scrolling for anchor links
function initializeSmoothScrolling() {
  // Handle navigation links
  document.addEventListener("click", (e) => {
    const target = e.target.closest('a[href^="#"]')
    if (target) {
      e.preventDefault()
      const targetId = target.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Close mobile menu if open
        const mobileNav = document.getElementById("mobile-nav")
        const toggle = document.querySelector(".mobile-menu-toggle")
        if (mobileNav && mobileNav.classList.contains("active")) {
          mobileNav.classList.remove("active")
          toggle.classList.remove("active")
        }
      }
    }
  })
}

// Initialize notification container
function initializeNotificationContainer() {
  if (!document.getElementById("notification-container")) {
    const container = document.createElement("div")
    container.id = "notification-container"
    container.className = "notification-container"
    document.body.appendChild(container)
  }
}

// Initialize animations
function initializeAnimations() {
  // Create intersection observer for animations
  animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")

          // Special handling for counter animations
          if (entry.target.hasAttribute("data-count")) {
            animateCounter(entry.target)
          }
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  // Observe elements with data-aos attribute
  document.querySelectorAll("[data-aos]").forEach((el) => {
    animationObserver.observe(el)
  })
}

// Initialize scroll effects
function initializeScrollEffects() {
  let ticking = false

  function updateScrollEffects() {
    const scrollY = window.scrollY

    // Parallax effect for hero particles
    const particles = document.querySelectorAll(".particle")
    particles.forEach((particle, index) => {
      const speed = ((index % 3) + 1) * 0.5
      particle.style.transform = `translateY(${scrollY * speed}px)`
    })

    ticking = false
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects)
      ticking = true
    }
  })
}

// Initialize particles
function initializeParticles() {
  const particlesContainer = document.getElementById("particles")
  if (!particlesContainer) return

  const particleCount = 50

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"

    // Random position
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"

    // Random animation delay
    particle.style.animationDelay = Math.random() * 6 + "s"

    // Random size
    const size = Math.random() * 4 + 2
    particle.style.width = size + "px"
    particle.style.height = size + "px"

    particlesContainer.appendChild(particle)
  }
}

// Initialize header scroll effect
function initializeHeaderScroll() {
  const header = document.getElementById("header")
  if (!header) return

  let lastScrollY = window.scrollY

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }

    lastScrollY = currentScrollY
  })
}

// Initialize back to top button
function initializeBackToTop() {
  let backToTopBtn = document.getElementById("back-to-top")

  if (!backToTopBtn) {
    // Create back to top button if it doesn't exist
    backToTopBtn = document.createElement("button")
    backToTopBtn.id = "back-to-top"
    backToTopBtn.className = "back-to-top"
    backToTopBtn.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 15l-6-6-6 6"></path>
      </svg>
    `
    backToTopBtn.onclick = scrollToTop
    document.body.appendChild(backToTopBtn)
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add("visible")
    } else {
      backToTopBtn.classList.remove("visible")
    }
  })
}

// Animate counter
function animateCounter(element) {
  const target = Number.parseInt(element.getAttribute("data-count"))
  const duration = 2000
  const step = target / (duration / 16)
  let current = 0

  const timer = setInterval(() => {
    current += step
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current).toLocaleString()
  }, 16)
}

// Initialize home page
function initializeHomePage() {
  loadFeaturedProducts()
  initializeStatsAnimation()

  // Ensure all sections are visible
  const sections = ["about", "contact"]
  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.style.display = "block"
    }
  })
}

// Initialize stats animation
function initializeStatsAnimation() {
  const statNumbers = document.querySelectorAll(".stat-number")
  statNumbers.forEach((stat) => {
    if (animationObserver) {
      animationObserver.observe(stat)
    }
  })
}

// Load featured products for home page
function loadFeaturedProducts() {
  const container = document.getElementById("featured-products")
  if (!container) return

  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4)
  container.innerHTML = featuredProducts.map((product, index) => createProductCard(product, index * 100)).join("")
}

// Initialize catalog page
function initializeCatalog() {
  setupFilters()
  initializePriceRange()
  loadCatalogProducts()

  // Parse URL parameters
  const urlParams = new URLSearchParams(window.location.search)
  const category = urlParams.get("category")
  const search = urlParams.get("search")

  if (category) {
    currentFilters.category = category
    const categoryInput = document.querySelector(`input[name="category"][value="${category}"]`)
    if (categoryInput) {
      categoryInput.checked = true
    }
  }

  if (search) {
    currentFilters.search = search
    const searchInput = document.getElementById("hero-search")
    if (searchInput) {
      searchInput.value = search
    }
  }

  loadCatalogProducts()
}

// Load products for catalog page
function loadCatalogProducts() {
  const container = document.getElementById("catalog-products")
  if (!container) return

  let filteredProducts = filterProducts(products)
  filteredProducts = sortFilteredProducts(filteredProducts)

  const totalProducts = filteredProducts.length
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  container.innerHTML = paginatedProducts.map((product) => createProductCard(product)).join("")

  // Update results count
  const resultsCount = document.getElementById("results-count")
  if (resultsCount) {
    resultsCount.textContent = totalProducts
  }

  // Update pagination
  updatePagination(totalProducts)
}

// Filter products based on current filters
function filterProducts(products) {
  return products.filter((product) => {
    // Category filter
    if (currentFilters.category !== "all" && product.category !== currentFilters.category) {
      return false
    }

    // Price filter
    if (product.price < currentFilters.priceMin || product.price > currentFilters.priceMax) {
      return false
    }

    // Brand filter
    if (currentFilters.brands.length > 0 && !currentFilters.brands.includes(product.brand)) {
      return false
    }

    // Search filter
    if (currentFilters.search && !product.name.toLowerCase().includes(currentFilters.search.toLowerCase())) {
      return false
    }

    // Rating filter
    if (currentFilters.rating > 0 && product.rating < currentFilters.rating) {
      return false
    }

    return true
  })
}

// Sort products
function sortFilteredProducts(products) {
  const sorted = [...products]

  switch (currentSort) {
    case "price-low":
      return sorted.sort((a, b) => a.price - b.price)
    case "price-high":
      return sorted.sort((a, b) => b.price - a.price)
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating)
    case "newest":
      return sorted.sort((a, b) => b.id - a.id)
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    default:
      return sorted.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
  }
}

// Create enhanced product card HTML
function createProductCard(product, delay = 0) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return `
    <div class="product-card" data-aos="fade-up" data-aos-delay="${delay}">
      ${product.isNew ? '<div class="product-badge new">New</div>' : ""}
      ${discount > 0 ? `<div class="product-badge discount">-${discount}%</div>` : ""}
      
      <div class="product-image" onclick="viewProduct(${product.id})">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <div class="product-overlay">
          <button class="quick-view-btn" onclick="quickViewProduct(${product.id})">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Quick View
          </button>
        </div>
      </div>
      
      <div class="product-info">
        <div class="product-brand">${product.brand.toUpperCase()}</div>
        <h3 class="product-title" onclick="viewProduct(${product.id})">${product.name}</h3>
        
        <div class="product-rating">
          <div class="rating-stars">
            ${generateStars(product.rating)}
          </div>
          <span class="rating-text">(${product.reviewCount})</span>
        </div>
        
        <div class="product-pricing">
          <div class="product-price">$${product.price.toLocaleString()}</div>
          ${product.originalPrice ? `<div class="product-original-price">$${product.originalPrice.toLocaleString()}</div>` : ""}
        </div>
        
        <div class="product-features">
          ${product.features
            .slice(0, 2)
            .map((feature) => `<span class="feature-tag">${feature}</span>`)
            .join("")}
        </div>
        
        <div class="product-actions">
          <button class="btn primary" onclick="addToCart(${product.id})" ${!product.inStock ? "disabled" : ""}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 6H3m4 7v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6"></path>
            </svg>
            ${product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
          <button class="btn secondary" onclick="addToWishlist(${product.id})">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `
}

// Generate star rating HTML
function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  let starsHTML = ""

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<span class="star filled">★</span>'
  }

  // Half star
  if (hasHalfStar) {
    starsHTML += '<span class="star half">★</span>'
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<span class="star empty">☆</span>'
  }

  return starsHTML
}

// Get product icon based on category
function getProductIcon(category) {
  const icons = {
    smartphones: "📱",
    laptops: "💻",
    tvs: "📺",
    audio: "🎧",
    gaming: "🎮",
    accessories: "🔌",
  }
  return icons[category] || "📦"
}

// Setup filters for catalog page
function setupFilters() {
  // Category filters
  const categoryInputs = document.querySelectorAll('input[name="category"]')
  categoryInputs.forEach((input) => {
    input.addEventListener("change", function () {
      currentFilters.category = this.value
      currentPage = 1
      loadCatalogProducts()
    })
  })

  // Brand filters
  const brandInputs = document.querySelectorAll('input[type="checkbox"]')
  brandInputs.forEach((input) => {
    input.addEventListener("change", function () {
      if (this.checked) {
        currentFilters.brands.push(this.value)
      } else {
        currentFilters.brands = currentFilters.brands.filter((brand) => brand !== this.value)
      }
      currentPage = 1
      loadCatalogProducts()
    })
  })

  // Rating filters
  const ratingInputs = document.querySelectorAll('input[name="rating"]')
  ratingInputs.forEach((input) => {
    input.addEventListener("change", function () {
      currentFilters.rating = Number.parseInt(this.value)
      currentPage = 1
      loadCatalogProducts()
    })
  })

  // Sort functionality
  const sortSelect = document.getElementById("sort-select")
  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      currentSort = this.value
      loadCatalogProducts()
    })
  }
}

// Initialize price range sliders
function initializePriceRange() {
  const priceMin = document.getElementById("price-min")
  const priceMax = document.getElementById("price-max")
  const priceMinInput = document.getElementById("price-min-input")
  const priceMaxInput = document.getElementById("price-max-input")
  const sliderRange = document.getElementById("slider-range")

  if (priceMin && priceMax && priceMinInput && priceMaxInput && sliderRange) {
    function updateSliderRange() {
      const minVal = Number.parseInt(priceMin.value)
      const maxVal = Number.parseInt(priceMax.value)
      const minPercent = (minVal / 5000) * 100
      const maxPercent = (maxVal / 5000) * 100

      sliderRange.style.left = minPercent + "%"
      sliderRange.style.width = maxPercent - minPercent + "%"
    }

    priceMin.addEventListener("input", function () {
      const value = Number.parseInt(this.value)
      if (value > Number.parseInt(priceMax.value)) {
        priceMax.value = this.value
        priceMaxInput.value = this.value
        currentFilters.priceMax = value
      }
      currentFilters.priceMin = value
      priceMinInput.value = value
      updateSliderRange()
    })

    priceMax.addEventListener("input", function () {
      const value = Number.parseInt(this.value)
      if (value < Number.parseInt(priceMin.value)) {
        priceMin.value = this.value
        priceMinInput.value = this.value
        currentFilters.priceMin = value
      }
      currentFilters.priceMax = value
      priceMaxInput.value = value
      updateSliderRange()
    })

    priceMinInput.addEventListener("input", function () {
      const value = Number.parseInt(this.value)
      if (value <= 5000 && value >= 0) {
        priceMin.value = value
        currentFilters.priceMin = value
        updateSliderRange()
      }
    })

    priceMaxInput.addEventListener("input", function () {
      const value = Number.parseInt(this.value)
      if (value <= 5000 && value >= 0) {
        priceMax.value = value
        currentFilters.priceMax = value
        updateSliderRange()
      }
    })

    updateSliderRange()
  }
}

// Set price range preset
function setPriceRange(min, max) {
  const priceMin = document.getElementById("price-min")
  const priceMax = document.getElementById("price-max")
  const priceMinInput = document.getElementById("price-min-input")
  const priceMaxInput = document.getElementById("price-max-input")

  if (priceMin && priceMax && priceMinInput && priceMaxInput) {
    priceMin.value = min
    priceMax.value = max
    priceMinInput.value = min
    priceMaxInput.value = max
    currentFilters.priceMin = min
    currentFilters.priceMax = max

    const sliderRange = document.getElementById("slider-range")
    if (sliderRange) {
      const minPercent = (min / 5000) * 100
      const maxPercent = (max / 5000) * 100
      sliderRange.style.left = minPercent + "%"
      sliderRange.style.width = maxPercent - minPercent + "%"
    }

    loadCatalogProducts()
  }
}

// Apply filters
function applyFilters() {
  currentPage = 1
  loadCatalogProducts()
}

// Clear all filters
function clearFilters() {
  currentFilters = {
    category: "all",
    priceMin: 0,
    priceMax: 5000,
    brands: [],
    search: "",
    rating: 0,
  }

  // Reset form elements
  const categoryAll = document.querySelector('input[name="category"][value="all"]')
  if (categoryAll) categoryAll.checked = true

  const brandInputs = document.querySelectorAll('input[type="checkbox"]')
  brandInputs.forEach((input) => (input.checked = false))

  const ratingInputs = document.querySelectorAll('input[name="rating"]')
  ratingInputs.forEach((input) => (input.checked = false))

  const priceMin = document.getElementById("price-min")
  const priceMax = document.getElementById("price-max")
  const priceMinInput = document.getElementById("price-min-input")
  const priceMaxInput = document.getElementById("price-max-input")

  if (priceMin && priceMax && priceMinInput && priceMaxInput) {
    priceMin.value = 0
    priceMax.value = 5000
    priceMinInput.value = 0
    priceMaxInput.value = 5000

    const sliderRange = document.getElementById("slider-range")
    if (sliderRange) {
      sliderRange.style.left = "0%"
      sliderRange.style.width = "100%"
    }
  }

  currentPage = 1
  loadCatalogProducts()
}

// Handle search with debouncing
function handleSearch(event) {
  currentFilters.search = event.target.value
  if (document.getElementById("catalog-products")) {
    currentPage = 1
    loadCatalogProducts()
  }
}

// Search products function
function searchProducts() {
  const searchInput = document.getElementById("search-input") || document.querySelector(".search-input")
  if (searchInput && searchInput.value.trim()) {
    window.location.href = `catalog.html?search=${encodeURIComponent(searchInput.value.trim())}`
  }
}

// Perform quick search from hero
function performQuickSearch() {
  const searchInput = document.getElementById("hero-search")
  if (searchInput && searchInput.value.trim()) {
    currentFilters.search = searchInput.value.trim()
    currentPage = 1
    loadCatalogProducts()
  }
}

// Quick filter function
function quickFilter(category) {
  currentFilters.category = category
  const categoryInput = document.querySelector(`input[name="category"][value="${category}"]`)
  if (categoryInput) {
    categoryInput.checked = true
  }
  currentPage = 1
  loadCatalogProducts()
}

// Change view function
function changeView(view) {
  const viewBtns = document.querySelectorAll(".view-btn")
  const productsGrid = document.getElementById("catalog-products")

  viewBtns.forEach((btn) => btn.classList.remove("active"))
  document.querySelector(`[data-view="${view}"]`).classList.add("active")

  if (view === "list") {
    productsGrid.classList.add("list-view")
  } else {
    productsGrid.classList.remove("list-view")
  }
}

// Sort products function
function sortProducts() {
  const sortSelect = document.getElementById("sort-select")
  if (sortSelect) {
    currentSort = sortSelect.value
    loadCatalogProducts()
  }
}

// Update pagination
function updatePagination(totalProducts) {
  const paginationContainer = document.getElementById("pagination")
  if (!paginationContainer) return

  const totalPages = Math.ceil(totalProducts / productsPerPage)

  if (totalPages <= 1) {
    paginationContainer.innerHTML = ""
    return
  }

  let paginationHTML = ""

  // Previous button
  paginationHTML += `<button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? "disabled" : ""}>Previous</button>`

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      paginationHTML += `<button class="active">${i}</button>`
    } else if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
      paginationHTML += `<button onclick="changePage(${i})">${i}</button>`
    } else if (i === currentPage - 3 || i === currentPage + 3) {
      paginationHTML += `<span>...</span>`
    }
  }

  // Next button
  paginationHTML += `<button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? "disabled" : ""}>Next</button>`

  paginationContainer.innerHTML = paginationHTML
}

// Change page
function changePage(page) {
  const totalPages = Math.ceil(filterProducts(products).length / productsPerPage)
  if (page >= 1 && page <= totalPages) {
    currentPage = page
    loadCatalogProducts()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

// Load product details
function loadProductDetails(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  // Update breadcrumb
  const breadcrumb = document.getElementById("product-breadcrumb")
  if (breadcrumb) {
    breadcrumb.textContent = product.name
  }

  // Update page title
  document.title = `${product.name} - TechStore`

  // Create product content
  const productContent = document.getElementById("product-content")
  if (productContent) {
    productContent.innerHTML = `
            <div class="product-gallery">
                <div class="main-image">
                    <img src="${product.image}" alt="${product.name}" />
                </div>
            </div>
            <div class="product-details-info">
                <h1>${product.name}</h1>
                <div class="product-price-large">$${product.price.toLocaleString()}</div>
                <div class="product-rating-large">${"★".repeat(Math.floor(product.rating))}${"☆".repeat(5 - Math.floor(product.rating))} (${product.rating})</div>
                <div class="product-description-short">${product.description}</div>
                <div class="quantity-selector">
                    <label>Quantity:</label>
                    <input type="number" class="quantity-input" value="1" min="1" max="10" id="product-quantity">
                </div>
                <div class="product-actions-large">
                    <button class="btn-primary" onclick="addToCart(${product.id}, document.getElementById('product-quantity').value)">Add to Cart</button>
                    <button class="btn-secondary" onclick="addToWishlist(${product.id})">Add to Wishlist</button>
                </div>
                <div class="product-availability">
                    <span style="color: ${product.inStock ? "#4caf50" : "#f44336"}">
                        ${product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
                    </span>
                </div>
            </div>
        `
  }

  // Update description tab
  const descriptionTab = document.getElementById("product-description")
  if (descriptionTab) {
    descriptionTab.innerHTML = `
            <h3>Product Description</h3>
            <p>${product.description}</p>
            <h4>Key Features:</h4>
            <ul>
                ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
        `
  }

  // Update specifications tab
  const specificationsTab = document.getElementById("product-specifications")
  if (specificationsTab) {
    const specsHTML = Object.entries(product.specifications)
      .map(([key, value]) => `<tr><th>${key}</th><td>${value}</td></tr>`)
      .join("")

    specificationsTab.innerHTML = `
            <table class="specifications-table">
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    ${specsHTML}
                </tbody>
            </table>
        `
  }
}

// Load related products
function loadRelatedProducts(productId) {
  const currentProduct = products.find((p) => p.id === productId)
  if (!currentProduct) return

  const relatedProducts = products
    .filter((p) => p.id !== productId && p.category === currentProduct.category)
    .slice(0, 4)

  const container = document.getElementById("related-products")
  if (container) {
    container.innerHTML = relatedProducts.map((product) => createProductCard(product)).join("")
  }
}

// Show product tabs
function showTab(tabName) {
  // Hide all tabs
  const tabPanes = document.querySelectorAll(".tab-pane")
  tabPanes.forEach((pane) => pane.classList.remove("active"))

  // Remove active class from all buttons
  const tabButtons = document.querySelectorAll(".tab-btn")
  tabButtons.forEach((btn) => btn.classList.remove("active"))

  // Show selected tab
  const selectedTab = document.getElementById(`${tabName}-tab`)
  if (selectedTab) {
    selectedTab.classList.add("active")
  }

  // Add active class to clicked button
  const clickedButton = event.target
  clickedButton.classList.add("active")
}

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobile-nav")
  const toggle = document.querySelector(".mobile-menu-toggle")

  if (mobileNav && toggle) {
    mobileNav.classList.toggle("active")
    toggle.classList.toggle("active")
  }
}

// Filter by category (from home page)
function filterByCategory(category) {
  window.location.href = `catalog.html?category=${category}`
}

// View product details
function viewProduct(productId) {
  window.location.href = `product.html?id=${productId}`
}

// Quick view product
function quickViewProduct(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  // Create and show quick view modal
  showNotification(`Quick view for ${product.name} - Feature coming soon!`, "info")
}

// Add to cart with enhanced feedback
function addToCart(productId, quantity = 1) {
  const product = products.find((p) => p.id === productId)
  if (!product || !product.inStock) {
    showNotification("Product is out of stock!", "error")
    return
  }

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += Number.parseInt(quantity)
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: Number.parseInt(quantity),
      brand: product.brand,
    })
  }

  localStorage.setItem("techstore_cart", JSON.stringify(cart))
  updateCartCount()
  showNotification(`${product.name} added to cart!`, "success")

  // Add visual feedback
  animateCartButton()
}

// Add to wishlist
function addToWishlist(productId) {
  const product = products.find((p) => p.id === productId)
  if (product) {
    showNotification(`${product.name} added to wishlist!`, "success")
    // In a real app, this would save to wishlist
  }
}

// Animate cart button
function animateCartButton() {
  const cartBtn = document.querySelector(".cart-btn")
  if (cartBtn) {
    cartBtn.style.transform = "scale(1.1)"
    setTimeout(() => {
      cartBtn.style.transform = "scale(1)"
    }, 200)
  }
}

// Update cart count with animation
function updateCartCount() {
  const cartCount = document.querySelector(".cart-count")
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

    if (totalItems !== Number.parseInt(cartCount.textContent)) {
      cartCount.style.transform = "scale(1.3)"
      setTimeout(() => {
        cartCount.textContent = totalItems
        cartCount.style.transform = "scale(1)"
      }, 150)
    }
  }
}

// Open cart modal with animation
function openCart() {
  const modal = document.getElementById("cart-modal")
  if (modal) {
    modal.style.display = "flex"
    modal.classList.add("active")
    updateCartDisplay()
    document.body.style.overflow = "hidden"
  }
}

// Close cart modal
function closeCart() {
  const modal = document.getElementById("cart-modal")
  if (modal) {
    modal.classList.remove("active")
    setTimeout(() => {
      modal.style.display = "none"
    }, 300)
    document.body.style.overflow = "auto"
  }
}

// Update cart display with enhanced UI
function updateCartDisplay() {
  const cartItems = document.getElementById("cart-items")
  const cartTotal = document.getElementById("cart-total")

  if (!cartItems || !cartTotal) return

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add some products to get started!</p>
      </div>
    `
    cartTotal.textContent = "0.00"
    return
  }

  const cartHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-brand">${item.brand.toUpperCase()}</div>
        <div class="cart-item-price">$${item.price.toLocaleString()}</div>
      </div>
      <div class="cart-item-controls">
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
          <span class="quantity-display">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    </div>
  `,
    )
    .join("")

  cartItems.innerHTML = cartHTML

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartTotal.textContent = total.toLocaleString("en-US", { minimumFractionDigits: 2 })
}

// Get product category by ID
function getProductCategory(productId) {
  const product = products.find((p) => p.id === productId)
  return product ? product.category : "accessories"
}

// Update cart quantity
function updateCartQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId)
  if (item) {
    item.quantity += change
    if (item.quantity <= 0) {
      removeFromCart(productId)
    } else {
      localStorage.setItem("techstore_cart", JSON.stringify(cart))
      updateCartCount()
      updateCartDisplay()
    }
  }
}

// Remove from cart
function removeFromCart(productId) {
  const product = products.find((p) => p.id === productId)
  cart = cart.filter((item) => item.id !== productId)
  localStorage.setItem("techstore_cart", JSON.stringify(cart))
  updateCartCount()
  updateCartDisplay()

  if (product) {
    showNotification(`${product.name} removed from cart`, "info")
  }
}

// Enhanced checkout process
function checkout() {
  if (cart.length === 0) {
    showNotification("Your cart is empty!", "error")
    return
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  showNotification("Redirecting to secure checkout...", "info")

  // Simulate checkout process
  setTimeout(() => {
    cart = []
    localStorage.setItem("techstore_cart", JSON.stringify(cart))
    updateCartCount()
    closeCart()
    showNotification(`Order placed successfully! Total: $${total.toLocaleString()}`, "success")
  }, 2000)
}

// Newsletter subscription
function subscribeNewsletter(event) {
  event.preventDefault()
  const email = event.target.querySelector('input[type="email"]').value

  if (email) {
    showNotification("Thank you for subscribing to our newsletter!", "success")
    event.target.reset()
  }
}

// Enhanced notification system
function showNotification(message, type = "success") {
  const container = document.getElementById("notification-container")
  if (!container) return

  const notification = document.createElement("div")
  notification.className = `notification ${type}`

  const icon =
    {
      success: "✓",
      error: "✗",
      info: "ℹ",
      warning: "⚠",
    }[type] || "ℹ"

  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <span style="font-weight: bold;">${icon}</span>
      <span>${message}</span>
    </div>
  `

  container.appendChild(notification)

  // Auto remove after 4 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = "slideOutRight 0.3s ease-in"
      setTimeout(() => {
        notification.parentNode.removeChild(notification)
      }, 300)
    }
  }, 4000)
}

// Scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Debounce function for performance
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Initialize product page
function initializeProductPage() {
  const urlParams = new URLSearchParams(window.location.search)
  const productId = Number.parseInt(urlParams.get("id"))

  if (productId) {
    loadProductDetails(productId)
    loadRelatedProducts(productId)
  }
}

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  const modal = document.getElementById("cart-modal")
  if (event.target === modal) {
    closeCart()
  }
})

// Handle keyboard navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart()

    // Close mobile menu if open
    const mobileNav = document.getElementById("mobile-nav")
    const toggle = document.querySelector(".mobile-menu-toggle")
    if (mobileNav && mobileNav.classList.contains("active")) {
      mobileNav.classList.remove("active")
      toggle.classList.remove("active")
    }
  }
})

// Handle window resize
window.addEventListener(
  "resize",
  debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768) {
      const mobileNav = document.getElementById("mobile-nav")
      const toggle = document.querySelector(".mobile-menu-toggle")
      if (mobileNav && toggle) {
        mobileNav.classList.remove("active")
        toggle.classList.remove("active")
      }
    }
  }, 250),
)

// Performance optimization: Lazy load images
function initializeLazyLoading() {
  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}
