document.addEventListener('DOMContentLoaded', () => {
const ssdRadio = document.getElementById('ssd');
const hddRadio = document.getElementById('hdd');
const spindleInput = document.querySelectorAll('.spindle-input');
const cacheInput = document.querySelectorAll('.cache-input');
const enduranceInput = document.querySelectorAll('.endurance-input');
const typeSelect = document.getElementById('typeSelect');
const formFactorInput = document.getElementById('formFactor');
const defaultFormFactor = formFactorInput?.value; // save original default
const ebayTableSSD = document.getElementById('ebaySSD');
const ebayTableHDD = document.getElementById('ebayHDD');
const flash = document.getElementById('flashInput');
const twd = document.getElementById('twd');
const write = document.getElementById('writeInput');
const recording = document.getElementById('recordingInput');
const ebayTabHDD = document.getElementById('ebayTabHDD');
const ebayTabSSD = document.getElementById('ebayTabSSD');
const image = document.getElementById('image');
const tray = document.getElementById('tray');
const otherImage = document.getElementById('otherImage');
const otherImageWrapper = document.getElementById('other_image');
const typeHDD = document.getElementById('hdd');
 

// Compatibility HTML - Shopify
//SSD HP Compatibilty 
const COMPAT_HTML_SSD_GEN8 = `
<details>
<summary><span class="headline">Compatibility</span></summary>
<div class="indent-content">
  <div id="compatibility">
    <div class="compatibility-list">
      <h2 class="compatibility-list-title">Compatible with these HP/HPE Systems:</h2>
      <h2 class="compatibility-list-title">Generation 8</h2>
      <h3 class="compatibility-list-header">ProLiant BL Series:</h3>
      <p class="compatibility-list-items">BL420c, BL460c, BL465c, BL660c</p>

      <h3 class="compatibility-list-header">ProLiant DL Series:</h3>
      <p class="compatibility-list-items">DL120, DL160, DL180, DL320e, DL360, DL360e, DL360p, DL388, DL380, DL380e, DL380p, DL385p, DL560, DL580</p>

      <h3 class="compatibility-list-header">ProLiant ML Series:</h3>
      <p class="compatibility-list-items">ML110, ML150, ML310e, ML350, ML350e, ML350p</p>

      <h3 class="compatibility-list-header">ProLiant SL Series:</h3>
      <p class="compatibility-list-items">SL230s, SL250s, SL270s</p>

      <h3 class="compatibility-list-header">HP Storage:</h3>
      <p class="compatibility-list-items">D3700, D2220sb, StoreEasy 1830, StoreEasy 1840</p>

      <h3 class="compatibility-list-header">HP Synergy Systems:</h3>
      <p class="compatibility-list-items">D3940</p>
    </div>
  </div>
</div>
</details>`;

const COMPAT_HTML_SSD_GEN9 = `
<details>
<summary><span class="headline">Compatibility</span></summary>
<div class="indent-content">
  <div id="compatibility">
    <div class="compatibility-list">
      <h2 class="compatibility-list-title">Compatible with these HP/HPE Systems:</h2>
      <h2 class="compatibility-list-title">Generation 9</h2>
      <h3 class="compatibility-list-header">ProLiant BL Series:</h3>
      <p class="compatibility-list-items">BL420c, BL460c, BL465c, BL660c</p>

      <h3 class="compatibility-list-header">ProLiant DL Series:</h3>
      <p class="compatibility-list-items">DL20, DL120, DL160, DL180, DL320e, DL360, DL360e, DL360p, DL388, DL380, DL380e, DL380p, DL385p, DL560, DL580</p>

      <h3 class="compatibility-list-header">ProLiant ML Series:</h3>
      <p class="compatibility-list-items">ML110, ML150, ML310e, ML350, ML350e, ML350p</p>

      <h3 class="compatibility-list-header">ProLiant SL Series:</h3>
      <p class="compatibility-list-items">SL230s, SL250s, SL270s</p>

      <h3 class="compatibility-list-header">ProLiant XL Series:</h3>
      <p class="compatibility-list-items">XL170r, XL190r, XL220a, XL230a, XL250a</p>

      <h3 class="compatibility-list-header">HP Storage:</h3>
      <p class="compatibility-list-items">D3700, D2220sb, StoreEasy 1830, StoreEasy 1840</p>

      <h3 class="compatibility-list-header">HP Synergy Systems:</h3>
      <p class="compatibility-list-items">D3940</p>

      <h3 class="compatibility-list-header">Apollo Series:</h3>
      <p class="compatibility-list-items">6500</p>
    </div>
  </div>
</div>
</details>`;

const COMPAT_HTML_SSD_GEN10 = `
<details>
<summary><span class="headline">Compatibility</span></summary>
<div class="indent-content">
  <div id="compatibility">
    <div class="compatibility-list">
      <h2 class="compatibility-list-title">Compatible with these HP/HPE Systems:</h2>
      <h2 class="compatibility-list-title">Generation 10</h2>
      <h3 class="compatibility-list-header">ProLiant BL Series:</h3>
      <p class="compatibility-list-items">BL460c</p>

      <h3 class="compatibility-list-header">ProLiant DL Series:</h3>
      <p class="compatibility-list-items">DL20, DL60, DL80, DL160, DL325, DL360, DL380, DL385, DL388, DL560, DL580</p>

      <h3 class="compatibility-list-header">ProLiant DX Series:</h3>
      <p class="compatibility-list-items">DX380</p>

      <h3 class="compatibility-list-header">ProLiant ML Series:</h3>
      <p class="compatibility-list-items">ML30, ML110, ML350</p>

      <h3 class="compatibility-list-header">ProLiant XL Series:</h3>
      <p class="compatibility-list-items">XL230k</p>

      <h3 class="compatibility-list-header">Synergy Series:</h3>
      <p class="compatibility-list-items">480, 660, D3940</p>

      <h3 class="compatibility-list-header">Apollo Series:</h3>
      <p class="compatibility-list-items">4500, 4510, 4520, 4530, k6000, d6500, r2200, r2600, r2800</p>
    </div>
  </div>
</div>
</details>`;

const COMPAT_HTML_SSD_GEN11 = `
<details>
<summary><span class="headline">Compatibility</span></summary>
<div class="indent-content">
  <div id="compatibility">
    <div class="compatibility-list">
      <h2 class="compatibility-list-title">Compatible with these HP/HPE Systems:</h2>
      <h2 class="compatibility-list-title">Generation 11</h2>
      <h3 class="compatibility-list-header">HP ProLiant DL Series:</h3>
      <p class="compatibility-list-items">DL20 (G10+), DL110 (G11), DL320 (G11/G12), DL325 (G10+/G11), DL340 (G12), DL345 (G10+/G11), DL360 (G10+/G11/G12), DL365 (G10+/G11), DL380 (G10+/G11/G12), DL385 (G10+/G11), DL560 (G11), DL580 (G12)</p>

      <h3 class="compatibility-list-header">HP ProLiant ML Series:</h3>
      <p class="compatibility-list-items">ML110 (G11), ML350 (G11/G12)</p>

      <h3 class="compatibility-list-header">HP Synergy Systems:</h3>
      <p class="compatibility-list-items">480 (G12) Compute Module</p>
    </div>
  </div>
</div>
</details>`;

//HDD HP Compatibilty
const COMPAT_HTML_HDD_GEN8 = `
<details>
<summary><span class="headline">Compatibility</span></summary>
<div class="indent-content">
  <div id="compatibility">
    <div class="compatibility-list">
      <h2 class="compatibility-list-title">Compatible with these HPE Systems:</h2>
      <h2 class="compatibility-list-title">Generation 8</h2>
      <h3 class="compatibility-list-header">ProLiant BL Series:</h3>
      <p class="compatibility-list-items">BL420c, BL460c, BL465c</p>

      <h3 class="compatibility-list-header">ProLiant DL Series:</h3>
      <p class="compatibility-list-items">DL120, DL160, DL180, DL320e, DL360e, DL360p, DL380e, DL380p</p>

      <h3 class="compatibility-list-header">ProLiant ML Series:</h3>
      <p class="compatibility-list-items">ML110, ML150, ML310e, ML350, ML350e</p>

      <h3 class="compatibility-list-header">ProLiant SL Series:</h3>
      <p class="compatibility-list-items">SL200t, SL230s, SL250s, SL2500, SL4550, SL4545, SL454x</p>

      <h3 class="compatibility-list-header">HPE Storage arrays:</h3>
      <p class="compatibility-list-items">D3600, D3700</p>

      <h3 class="compatibility-list-header">HPE StoreEasy:</h3>
      <p class="compatibility-list-items">1430, 1440, 1530, 1540, 1630, 1640</p>
    </div>
  </div>
</div>
</details>`;

const COMPAT_HTML_HDD_GEN9 = `
<details>
<summary><span class="headline">Compatibility</span></summary>
<div class="indent-content">
  <div id="compatibility">
    <div class="compatibility-list">
      <h2 class="compatibility-list-title">Compatible with these HPE Systems:</h2>
      <h2 class="compatibility-list-title">Generation 9</h2>
      <h3 class="compatibility-list-header">ProLiant BL Series:</h3>
      <p class="compatibility-list-items">BL420c, BL460c, BL465c</p>

      <h3 class="compatibility-list-header">ProLiant DL Series:</h3>
      <p class="compatibility-list-items">DL20, DL60, DL80, DL120, DL160, DL180, DL320e, DL360e, DL360p, DL380e, DL380p, DL388</p>

      <h3 class="compatibility-list-header">ProLiant ML Series:</h3>
      <p class="compatibility-list-items">ML110, ML150, ML310e, ML350, ML350e</p>

      <h3 class="compatibility-list-header">ProLiant SL Series:</h3>
      <p class="compatibility-list-items">SL200t, SL230s, SL250s, SL2500, SL4550, SL4545, SL454x</p>

      <h3 class="compatibility-list-header">HPE Storage arrays:</h3>
      <p class="compatibility-list-items">D3600, D3700</p>

      <h3 class="compatibility-list-header">HPE StoreEasy:</h3>
      <p class="compatibility-list-items">1430, 1440, 1530, 1540, 1630, 1640</p>
    </div>
  </div>
</div>
</details>`;

const COMPAT_HTML_HDD_GEN10 = `
<details>
<summary><span class="headline">Compatibility</span></summary>
<div class="indent-content">
  <div id="compatibility">
    <div class="compatibility-list">
      <h2 class="compatibility-list-title">Compatible with these HPE Systems:</h2>
      <h2 class="compatibility-list-title">Generation 10</h2>
      <h3 class="compatibility-list-header">ProLiant DL Series:</h3>
      <p class="compatibility-list-items">DL60, DL80, DL160, DL360, DL380, DL385, DL560</p>

      <h3 class="compatibility-list-header">ProLiant DX Series:</h3>
      <p class="compatibility-list-items">DX380</p>

      <h3 class="compatibility-list-header">ProLiant ML Series:</h3>
      <p class="compatibility-list-items">ML350</p>
    </div>
  </div>
</div>
</details>`;

const COMPAT_HTML_HDD_GEN11 = `
<details>
<summary><span class="headline">Compatibility</span></summary>
<div class="indent-content">
  <div id="compatibility">
    <div class="compatibility-list">
      <h2 class="compatibility-list-title">Compatible with these HP/HPE Systems:</h2>
      <h2 class="compatibility-list-title">Generation 11</h2>
      <h3 class="compatibility-list-header">HP ProLiant DL Series:</h3>
      <p class="compatibility-list-items">DL20 (G10+), DL110 (G11), DL320 (G11/G12), DL325 (G10+/11), DL340 (G12), DL345 (G10+/G11), DL360 (G10+/G11/G12), DL365 (G10+/G11), DL380 (G10+/G11/G12), DL385 (G10+/G11), DL560 (G11)</p>

      <h3 class="compatibility-list-header">HP ProLiant ML Series:</h3>
      <p class="compatibility-list-items">ML110 (G11), ML350 (G11/G12)</p>
    </div>
  </div>
</div>
</details>`;
            
            
//SSD DELL Compatibility
const COMPAT_HTML_DELL_SSD_GEN13_HYBRID = `
<details>
<summary><span class="headline">Compatibility</span></summary>
<div class="indent-content">
  <div id="compatibility">
    <div class="compatibility-list">
      <h2 class="compatibility-list-title">Compatible with these Dell Servers:</h2>
      
      <h3 class="compatibility-list-header">Dell PowerEdge Tower Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">T310, T320, T330, T340, T410, T420, T430, T440, T610, T620, T630, T640, T710</p>

      <h3 class="compatibility-list-header">Dell PowerEdge 11th Gen. Rack Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">R210, R310, R410, R415, R510, R710</p>

      <h3 class="compatibility-list-header">Dell PowerEdge 12th Gen. Rack Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">R220, R320, R420, R520, R720, R720XD</p>

      <h3 class="compatibility-list-header">Dell PowerEdge 13th Gen. Rack Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">R230, R330, R430, R530, R530XD, R730, R730XD</p>

      <h3 class="compatibility-list-header">Dell PowerEdge Cloud Series Servers (3.5in chassis):</h3>
      <p class="compatibility-list-items">C1100, C2100, C6100, C6220</p>

      <h3 class="compatibility-list-header">Dell PowerVault NAS storage arrays (3.5in chassis):</h3>
      <p class="compatibility-list-items">NF600, NX300, NX400, NX3000, NX3100, NX3200, NX3300</p>
    </div>
  </div>
</div>
</details>`;
            
const COMPAT_HTML_DELL_SSD_GEN14_HYBRID = `
<details>
<summary><span class="headline">Compatibility</span></summary>
<div class="indent-content">
  <div id="compatibility">
    <div class="compatibility-list">
      <h2 class="compatibility-list-title">Compatible with these Dell Servers:</h2>

      <h3 class="compatibility-list-header">PowerEdge 14th Gen Rack Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">
        R340, R440, R540, R640, R6415, R740, R740XD, R7415, R7425, R840, R940, R940XA, R6515, R6525, R7515, R7525, R450xs, R550xs
      </p>

      <h3 class="compatibility-list-header">PowerEdge 15th Gen Rack Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">
        R250, R350, R450, R550, R650, R650xs, R6515, R6525, R750, R750xa, R750xs, R7515, R7525, R560
      </p>

      <h3 class="compatibility-list-header">PowerEdge 16th Gen Rack Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">
        R260, R360, R660, R660xs, R6615, R6625, R760, R760xa, R760xd2, R760xs, R7615, R7625, R860, R960
      </p>

      <h3 class="compatibility-list-header">PowerEdge T-Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">
        T40, T140, T340, T440, T640, T150, T350, T550, T160, T360, T560
      </p>

      <h3 class="compatibility-list-header">PowerEdge Cloud Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">
        C6420, C6520, C6525, C6615, C6620, XE7100
      </p>

      <h3 class="compatibility-list-header">PowerVault Storage Systems (3.5in chassis):</h3>
      <p class="compatibility-list-items">
        MD2460, MD2412, MD3400, MD3800, MD3820i, ME5012, ME5084, ME4012, ME4024, ME412, ME484
      </p>

      <h3 class="compatibility-list-header">PowerEdge Modular Systems (3.5in chassis):</h3>
      <p class="compatibility-list-items">
        MX5016s
      </p>

    </div>
  </div>
</div>
</details>
`;
            
const COMPAT_HTML_DELL_SSD_GEN13 = `
<details><summary><span class="headline">Compatibility</span></summary><div class="indent-content"><div id="compatibility"><div class="compatibility-list">
<h2 class="compatibility-list-title">Compatible with these Dell Servers:</h2>
<h3 class="compatibility-list-header">Dell 13G PowerEdge R-Series (2.5"):</h3>
<p class="compatibility-list-items">R330, R430, R630, R730, R730XD, R830, R930</p>
<h3 class="compatibility-list-header">Dell 12G PowerEdge R-Series (2.5"):</h3>
<p class="compatibility-list-items">R220, R320, R420, R620, R720, R720XD, R820, R920</p>
<h3 class="compatibility-list-header">Dell 11G PowerEdge R-Series (2.5"):</h3>
<p class="compatibility-list-items">R210, R410, R415, R510, R515, R610, R710, R715, R815, R910</p>
</div></div></div></details>`;            
            
const COMPAT_HTML_DELL_SSD_GEN14 = `
<details>
<summary><span class="headline">Compatibility</span></summary>
<div class="indent-content">
<div id="compatibility">
<div class="compatibility-list">
<h2 class="compatibility-list-title">Compatible with these Dell Servers:</h2>
<h3 class="compatibility-list-header">Dell G17 PowerEdge R-Series (2.5"):</h3>
<p class="compatibility-list-items">R470, R570, R670, R6715, R6725, R770, R7715, R7725, 17th Generation Servers.</p>
<h3 class="compatibility-list-header">Dell G16 PowerEdge R-Series (2.5"):</h3>
<p class="compatibility-list-items">R260, R360, R660, R660xs, R6615, R6625, R760, R760xa, R760xd2, R760xs, R7615, R7625, R860, R9600, 16th Generation Servers.</p>
<h3 class="compatibility-list-header">Dell G15 PowerEdge R-Series (2.5"):</h3>
<p class="compatibility-list-items">R250, R260, R350, R450, R550, R650, R650xs, R6515, R6525, R750, R750xs, R750xa, R7515, R7525, 15th Generation Servers.</p>
<h3 class="compatibility-list-header">Dell G14 PowerEdge R-Series (2.5"):</h3>
<p class="compatibility-list-items">R340, R440, R640, R6415, R740, R740XD, R7415, R7425, R840, R940, R940XA, R6515, R6525, R7515, R7525, 14th Generation Servers.</p>
</div>
</div>
</div>
</details>`;
      
const COMPAT_HTML_DELL_HDD_GEN13 = `
<details>
<summary><span class="headline">Compatibility</span></summary>
<div class="indent-content">
  <div id="compatibility">
    <div class="compatibility-list">
      <h2 class="compatibility-list-title">Compatible with these Dell Servers:</h2>

      <h3 class="compatibility-list-header">Dell PowerEdge Tower Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">T310, T320, T330, T340, T410, T420, T430, T440, T610, T620, T630, T640, T710</p>

      <h3 class="compatibility-list-header">Dell PowerEdge 11th Gen. Rack Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">R210, R310, R410, R415, R510, R710</p>

      <h3 class="compatibility-list-header">Dell PowerEdge 12th Gen. Rack Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">R220, R320, R420, R520, R720, R720XD</p>

      <h3 class="compatibility-list-header">Dell PowerEdge 13th Gen. Rack Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">R230, R330, R430, R530, R530XD, R730, R730XD</p>

      <h3 class="compatibility-list-header">Dell PowerEdge Cloud Series Servers (3.5in chassis):</h3>
      <p class="compatibility-list-items">C1100, C2100, C6100, C6220</p>

      <h3 class="compatibility-list-header">Dell PowerVault NAS storage arrays (3.5in chassis):</h3>
      <p class="compatibility-list-items">NF600, NX300, NX400, NX3000, NX3100, NX3200, NX3300</p>
    </div>
  </div>
</div>
</details>`;            
            
            
const COMPAT_HTML_DELL_HDD_GEN14 = `
<details>
<summary><span class="headline">Compatibility</span></summary>
<div class="indent-content">
  <div id="compatibility">
    <div class="compatibility-list">
      <h2 class="compatibility-list-title">Compatible with these Dell Servers:</h2>

      <h3 class="compatibility-list-header">PowerEdge 14th Gen Rack Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">
        R340, R440, R540, R640, R6415, R740, R740XD, R7415, R7425, R840, R940, R940XA, R6515, R6525, R7515, R7525, R450xs, R550xs
      </p>

      <h3 class="compatibility-list-header">PowerEdge 15th Gen Rack Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">
        R250, R350, R450, R550, R650, R650xs, R6515, R6525, R750, R750xa, R750xs, R7515, R7525, R560
      </p>

      <h3 class="compatibility-list-header">PowerEdge 16th Gen Rack Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">
        R260, R360, R660, R660xs, R6615, R6625, R760, R760xa, R760xd2, R760xs, R7615, R7625, R860, R960
      </p>

      <h3 class="compatibility-list-header">PowerEdge T-Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">
        T40, T140, T340, T440, T640, T150, T350, T550, T160, T360, T560
      </p>

      <h3 class="compatibility-list-header">PowerEdge Cloud Series (3.5in chassis):</h3>
      <p class="compatibility-list-items">
        C6420, C6520, C6525, C6615, C6620, XE7100
      </p>

      <h3 class="compatibility-list-header">PowerVault Storage Systems (3.5in chassis):</h3>
      <p class="compatibility-list-items">
        MD2460, MD2412, MD3400, MD3800, MD3820i, ME5012, ME5084, ME4012, ME4024, ME412, ME484
      </p>

      <h3 class="compatibility-list-header">PowerEdge Modular Systems (3.5in chassis):</h3>
      <p class="compatibility-list-items">
        MX5016s
      </p>

    </div>
  </div>
</div>
</details>
`;
                
    
    
// Compatibility HTML - eBay
// SSD HP Compatibility

const eBay_COMPAT_HTML_SSD_GEN8 = `
<div class="indent-content">
    <div id="compatibility">
        <div class="compatibility-list">
            <h2 class="compatibility-list-title">Compatible with these HP/HPE Systems:</h2>
            <h2 class="compatibility-list-title">Generation 8</h2>
            <h3 class="compatibility-list-header">ProLiant BL Series:</h3>
            <p class="compatibility-list-items">BL420c, BL460c, BL465c, BL660c</p>

            <h3 class="compatibility-list-header">ProLiant DL Series:</h3>
            <p class="compatibility-list-items">DL120, DL160, DL180, DL320e, DL360, DL360e, DL360p, DL388, DL380,
                DL380e, DL380p, DL385p, DL560, DL580</p>

            <h3 class="compatibility-list-header">ProLiant ML Series:</h3>
            <p class="compatibility-list-items">ML110, ML150, ML310e, ML350, ML350e, ML350p</p>

            <h3 class="compatibility-list-header">ProLiant SL Series:</h3>
            <p class="compatibility-list-items">SL230s, SL250s, SL270s</p>

            <h3 class="compatibility-list-header">HP Storage:</h3>
            <p class="compatibility-list-items">D3700, D2220sb, StoreEasy 1830, StoreEasy 1840</p>

            <h3 class="compatibility-list-header">HP Synergy Systems:</h3>
            <p class="compatibility-list-items">D3940</p>
        </div>
    </div>
</div>`;

const eBay_COMPAT_HTML_SSD_GEN9 = `
<div class="indent-content">
    <div id="compatibility">
        <div class="compatibility-list">
            <h2 class="compatibility-list-title">Compatible with these HP/HPE Systems:</h2>
            <h2 class="compatibility-list-title">Generation 9</h2>
            <h3 class="compatibility-list-header">ProLiant BL Series:</h3>
            <p class="compatibility-list-items">BL420c, BL460c, BL465c, BL660c</p>

            <h3 class="compatibility-list-header">ProLiant DL Series:</h3>
            <p class="compatibility-list-items">DL20, DL120, DL160, DL180, DL320e, DL360, DL360e, DL360p, DL388, DL380,
                DL380e, DL380p, DL385p, DL560, DL580</p>

            <h3 class="compatibility-list-header">ProLiant ML Series:</h3>
            <p class="compatibility-list-items">ML110, ML150, ML310e, ML350, ML350e, ML350p</p>

            <h3 class="compatibility-list-header">ProLiant SL Series:</h3>
            <p class="compatibility-list-items">SL230s, SL250s, SL270s</p>

            <h3 class="compatibility-list-header">ProLiant XL Series:</h3>
            <p class="compatibility-list-items">XL170r, XL190r, XL220a, XL230a, XL250a</p>

            <h3 class="compatibility-list-header">HP Storage:</h3>
            <p class="compatibility-list-items">D3700, D2220sb, StoreEasy 1830, StoreEasy 1840</p>

            <h3 class="compatibility-list-header">HP Synergy Systems:</h3>
            <p class="compatibility-list-items">D3940</p>

            <h3 class="compatibility-list-header">Apollo Series:</h3>
            <p class="compatibility-list-items">6500</p>
        </div>
    </div>
</div>`;

const eBay_COMPAT_HTML_SSD_GEN10 = `
<div class="indent-content">
    <div id="compatibility">
        <div class="compatibility-list">
            <h2 class="compatibility-list-title">Compatible with these HP/HPE Systems:</h2>
            <h2 class="compatibility-list-title">Generation 10</h2>
            <h3 class="compatibility-list-header">ProLiant BL Series:</h3>
            <p class="compatibility-list-items">BL460c</p>

            <h3 class="compatibility-list-header">ProLiant DL Series:</h3>
            <p class="compatibility-list-items">DL20, DL60, DL80, DL160, DL325, DL360, DL380, DL385, DL388, DL560, DL580
            </p>

            <h3 class="compatibility-list-header">ProLiant DX Series:</h3>
            <p class="compatibility-list-items">DX380</p>

            <h3 class="compatibility-list-header">ProLiant ML Series:</h3>
            <p class="compatibility-list-items">ML30, ML110, ML350</p>

            <h3 class="compatibility-list-header">ProLiant XL Series:</h3>
            <p class="compatibility-list-items">XL230k</p>

            <h3 class="compatibility-list-header">Synergy Series:</h3>
            <p class="compatibility-list-items">480, 660, D3940</p>

            <h3 class="compatibility-list-header">Apollo Series:</h3>
            <p class="compatibility-list-items">4500, 4510, 4520, 4530, k6000, d6500, r2200, r2600, r2800</p>
        </div>
    </div>
</div>`;

const eBay_COMPAT_HTML_SSD_GEN11 = `
<div class="indent-content">
    <div id="compatibility">
        <div class="compatibility-list">
            <h2 class="compatibility-list-title">Compatible with these HP/HPE Systems:</h2>
            <h2 class="compatibility-list-title">Generation 11</h2>
            <h3 class="compatibility-list-header">HP ProLiant DL Series:</h3>
            <p class="compatibility-list-items">DL20 (G10+), DL110 (G11), DL320 (G11/G12), DL325 (G10+/G11), DL340
                (G12), DL345 (G10+/G11), DL360 (G10+/G11/G12), DL365 (G10+/G11), DL380 (G10+/G11/G12), DL385 (G10+/G11),
                DL560 (G11), DL580 (G12)</p>

            <h3 class="compatibility-list-header">HP ProLiant ML Series:</h3>
            <p class="compatibility-list-items">ML110 (G11), ML350 (G11/G12)</p>

            <h3 class="compatibility-list-header">HP Synergy Systems:</h3>
            <p class="compatibility-list-items">480 (G12) Compute Module</p>
        </div>
    </div>
</div>`;


// HDD HP Compatibility

const eBay_COMPAT_HTML_HDD_GEN8 = `
<div class="indent-content">
    <div id="compatibility">
        <div class="compatibility-list">
            <h2 class="compatibility-list-title">Compatible with these HPE Systems:</h2>
            <h2 class="compatibility-list-title">Generation 8</h2>
            <h3 class="compatibility-list-header">ProLiant BL Series:</h3>
            <p class="compatibility-list-items">BL420c, BL460c, BL465c</p>

            <h3 class="compatibility-list-header">ProLiant DL Series:</h3>
            <p class="compatibility-list-items">DL120, DL160, DL180, DL320e, DL360e, DL360p, DL380e, DL380p</p>

            <h3 class="compatibility-list-header">ProLiant ML Series:</h3>
            <p class="compatibility-list-items">ML110, ML150, ML310e, ML350, ML350e</p>

            <h3 class="compatibility-list-header">ProLiant SL Series:</h3>
            <p class="compatibility-list-items">SL200t, SL230s, SL250s, SL2500, SL4550, SL4545, SL454x</p>

            <h3 class="compatibility-list-header">HPE Storage arrays:</h3>
            <p class="compatibility-list-items">D3600, D3700</p>

            <h3 class="compatibility-list-header">HPE StoreEasy:</h3>
            <p class="compatibility-list-items">1430, 1440, 1530, 1540, 1630, 1640</p>
        </div>
    </div>
</div>`;

const eBay_COMPAT_HTML_HDD_GEN9 = `
<div class="indent-content">
    <div id="compatibility">
        <div class="compatibility-list">
            <h2 class="compatibility-list-title">Compatible with these HPE Systems:</h2>
            <h2 class="compatibility-list-title">Generation 9</h2>
            <h3 class="compatibility-list-header">ProLiant BL Series:</h3>
            <p class="compatibility-list-items">BL420c, BL460c, BL465c</p>

            <h3 class="compatibility-list-header">ProLiant DL Series:</h3>
            <p class="compatibility-list-items">DL20, DL60, DL80, DL120, DL160, DL180, DL320e, DL360e, DL360p, DL380e,
                DL380p, DL388</p>

            <h3 class="compatibility-list-header">ProLiant ML Series:</h3>
            <p class="compatibility-list-items">ML110, ML150, ML310e, ML350, ML350e</p>

            <h3 class="compatibility-list-header">ProLiant SL Series:</h3>
            <p class="compatibility-list-items">SL200t, SL230s, SL250s, SL2500, SL4550, SL4545, SL454x</p>

            <h3 class="compatibility-list-header">HPE Storage arrays:</h3>
            <p class="compatibility-list-items">D3600, D3700</p>

            <h3 class="compatibility-list-header">HPE StoreEasy:</h3>
            <p class="compatibility-list-items">1430, 1440, 1530, 1540, 1630, 1640</p>
        </div>
    </div>
</div>`;

const eBay_COMPAT_HTML_HDD_GEN10 = `
<div class="indent-content">
    <div id="compatibility">
        <div class="compatibility-list">
            <h2 class="compatibility-list-title">Compatible with these HPE Systems:</h2>
            <h2 class="compatibility-list-title">Generation 10</h2>
            <h3 class="compatibility-list-header">ProLiant DL Series:</h3>
            <p class="compatibility-list-items">DL60, DL80, DL160, DL360, DL380, DL385, DL560</p>

            <h3 class="compatibility-list-header">ProLiant DX Series:</h3>
            <p class="compatibility-list-items">DX380</p>

            <h3 class="compatibility-list-header">ProLiant ML Series:</h3>
            <p class="compatibility-list-items">ML350</p>
        </div>
    </div>
</div>`;

const eBay_COMPAT_HTML_HDD_GEN11 = `
<div class="indent-content">
    <div id="compatibility">
        <div class="compatibility-list">
            <h2 class="compatibility-list-title">Compatible with these HP/HPE Systems:</h2>
            <h2 class="compatibility-list-title">Generation 11</h2>
            <h3 class="compatibility-list-header">HP ProLiant DL Series:</h3>
            <p class="compatibility-list-items">DL20 (G10+), DL110 (G11), DL320 (G11/G12), DL325 (G10+/11), DL340 (G12),
                DL345 (G10+/G11), DL360 (G10+/G11/G12), DL365 (G10+/G11), DL380 (G10+/G11/G12), DL385 (G10+/G11), DL560
                (G11)</p>

            <h3 class="compatibility-list-header">HP ProLiant ML Series:</h3>
            <p class="compatibility-list-items">ML110 (G11), ML350 (G11/G12)</p>
        </div>
    </div>
</div>`;


// SSD Dell Compatibility

const eBay_COMPAT_HTML_DELL_SSD_GEN13_HYBRID = `
<div class="indent-content">
    <div id="compatibility">
        <div class="compatibility-list">
            <h2 class="compatibility-list-title">Compatible with these Dell Servers:</h2>

            <h3 class="compatibility-list-header">Dell PowerEdge Tower Series (3.5in chassis):</h3>
            <p class="compatibility-list-items">T310, T320, T330, T340, T410, T420, T430, T440, T610, T620, T630, T640,
                T710</p>

            <h3 class="compatibility-list-header">Dell PowerEdge 11th Gen. Rack Series (3.5in chassis):</h3>
            <p class="compatibility-list-items">R210, R310, R410, R415, R510, R710</p>

            <h3 class="compatibility-list-header">Dell PowerEdge 12th Gen. Rack Series (3.5in chassis):</h3>
            <p class="compatibility-list-items">R220, R320, R420, R520, R720, R720XD</p>

            <h3 class="compatibility-list-header">Dell PowerEdge 13th Gen. Rack Series (3.5in chassis):</h3>
            <p class="compatibility-list-items">R230, R330, R430, R530, R530XD, R730, R730XD</p>

            <h3 class="compatibility-list-header">Dell PowerEdge Cloud Series Servers (3.5in chassis):</h3>
            <p class="compatibility-list-items">C1100, C2100, C6100, C6220</p>

            <h3 class="compatibility-list-header">Dell PowerVault NAS storage arrays (3.5in chassis):</h3>
            <p class="compatibility-list-items">NF600, NX300, NX400, NX3000, NX3100, NX3200, NX3300</p>
        </div>
    </div>
</div>`;

const eBay_COMPAT_HTML_DELL_SSD_GEN14_HYBRID = `
                <h2 class="compatibility-list-title">Compatible with these Dell Servers:</h2>
                <h3 class="compatibility-list-header">PowerEdge 14th Gen Rack Series (3.5in chassis):</h3>
                <p class="compatibility-list-items">
                    R340, R440, R540, R640, R6415, R740, R740XD, R7415, R7425, R840, R940, R940XA, R6515, R6525, R7515,
                    R7525, R450xs, R550xs
                </p>
                <h3 class="compatibility-list-header">PowerEdge 15th Gen Rack Series (3.5in chassis):</h3>
                <p class="compatibility-list-items">
                    R250, R350, R450, R550, R650, R650xs, R6515, R6525, R750, R750xa, R750xs, R7515, R7525, R560
                </p>
                <h3 class="compatibility-list-header">PowerEdge 16th Gen Rack Series (3.5in chassis):</h3>
                <p class="compatibility-list-items">
                    R260, R360, R660, R660xs, R6615, R6625, R760, R760xa, R760xd2, R760xs, R7615, R7625, R860, R960
                </p>
                <h3 class="compatibility-list-header">PowerEdge T-Series (3.5in chassis):</h3>
                <p class="compatibility-list-items">
                    T40, T140, T340, T440, T640, T150, T350, T550, T160, T360, T560
                </p>
                <h3 class="compatibility-list-header">PowerEdge Cloud Series (3.5in chassis):</h3>
                <p class="compatibility-list-items">
                    C6420, C6520, C6525, C6615, C6620, XE7100
                </p>
                <h3 class="compatibility-list-header">PowerVault Storage Systems (3.5in chassis):</h3>
                <p class="compatibility-list-items">
                    MD2460, MD2412, MD3400, MD3800, MD3820i, ME5012, ME5084, ME4012, ME4024, ME412, ME484
                </p>
                <h3 class="compatibility-list-header">PowerEdge Modular Systems (3.5in chassis):</h3>
                <p class="compatibility-list-items">
                    MX5016s
                </p>`;

const eBay_COMPAT_HTML_DELL_SSD_GEN13 = `
<div class="indent-content">
    <div id="compatibility">
        <div class="compatibility-list">
            <h2 class="compatibility-list-title">Compatible with these Dell Servers:</h2>

            <h3 class="compatibility-list-header">Dell 13G PowerEdge R-Series (2.5"):</h3>
            <p class="compatibility-list-items">R330, R430, R630, R730, R730XD, R830, R930</p>

            <h3 class="compatibility-list-header">Dell 12G PowerEdge R-Series (2.5"):</h3>
            <p class="compatibility-list-items">R220, R320, R420, R620, R720, R720XD, R820, R920</p>

            <h3 class="compatibility-list-header">Dell 11G PowerEdge R-Series (2.5"):</h3>
            <p class="compatibility-list-items">R210, R410, R415, R510, R515, R610, R710, R715, R815, R910</p>
        </div>
    </div>
</div>`;

const eBay_COMPAT_HTML_DELL_SSD_GEN14 = `
<div class="indent-content">
    <div id="compatibility">
        <div class="compatibility-list">
            <h2 class="compatibility-list-title">Compatible with these Dell Servers:</h2>

            <h3 class="compatibility-list-header">Dell G17 PowerEdge R-Series (2.5"):</h3>
            <p class="compatibility-list-items">R470, R570, R670, R6715, R6725, R770, R7715, R7725, 17th Generation
                Servers.</p>

            <h3 class="compatibility-list-header">Dell G16 PowerEdge R-Series (2.5"):</h3>
            <p class="compatibility-list-items">R260, R360, R660, R660xs, R6615, R6625, R760, R760xa, R760xd2, R760xs,
                R7615, R7625, R860, R9600, 16th Generation Servers.</p>

            <h3 class="compatibility-list-header">Dell G15 PowerEdge R-Series (2.5"):</h3>
            <p class="compatibility-list-items">R250, R260, R350, R450, R550, R650, R650xs, R6515, R6525, R750, R750xs,
                R750xa, R7515, R7525, 15th Generation Servers.</p>

            <h3 class="compatibility-list-header">Dell G14 PowerEdge R-Series (2.5"):</h3>
            <p class="compatibility-list-items">R340, R440, R640, R6415, R740, R740XD, R7415, R7425, R840, R940, R940XA,
                R6515, R6525, R7515, R7525, 14th Generation Servers.</p>
        </div>
    </div>
</div>`;


// HDD Dell Compatibility

const eBay_COMPAT_HTML_DELL_HDD_GEN13 = `
<div class="indent-content">
    <div id="compatibility">
        <div class="compatibility-list">
            <h2 class="compatibility-list-title">Compatible with these Dell Servers:</h2>

            <h3 class="compatibility-list-header">Dell PowerEdge Tower Series (3.5in chassis):</h3>
            <p class="compatibility-list-items">T310, T320, T330, T340, T410, T420, T430, T440, T610, T620, T630, T640,
                T710</p>

            <h3 class="compatibility-list-header">Dell PowerEdge 11th Gen. Rack Series (3.5in chassis):</h3>
            <p class="compatibility-list-items">R210, R310, R410, R415, R510, R710</p>

            <h3 class="compatibility-list-header">Dell PowerEdge 12th Gen. Rack Series (3.5in chassis):</h3>
            <p class="compatibility-list-items">R220, R320, R420, R520, R720, R720XD</p>

            <h3 class="compatibility-list-header">Dell PowerEdge 13th Gen. Rack Series (3.5in chassis):</h3>
            <p class="compatibility-list-items">R230, R330, R430, R530, R530XD, R730, R730XD</p>

            <h3 class="compatibility-list-header">Dell PowerEdge Cloud Series Servers (3.5in chassis):</h3>
            <p class="compatibility-list-items">C1100, C2100, C6100, C6220</p>

            <h3 class="compatibility-list-header">Dell PowerVault NAS storage arrays (3.5in chassis):</h3>
            <p class="compatibility-list-items">NF600, NX300, NX400, NX3000, NX3100, NX3200, NX3300</p>
        </div>
    </div>
</div>`;

const eBay_COMPAT_HTML_DELL_HDD_GEN14 = `
                <h2 class="compatibility-list-title">Compatible with these Dell Servers:</h2>
                <h3 class="compatibility-list-header">PowerEdge 14th Gen Rack Series (3.5in chassis):</h3>
                <p class="compatibility-list-items">
                    R340, R440, R540, R640, R6415, R740, R740XD, R7415, R7425, R840, R940, R940XA, R6515, R6525, R7515,
                    R7525, R450xs, R550xs
                </p>
                <h3 class="compatibility-list-header">PowerEdge 15th Gen Rack Series (3.5in chassis):</h3>
                <p class="compatibility-list-items">
                    R250, R350, R450, R550, R650, R650xs, R6515, R6525, R750, R750xa, R750xs, R7515, R7525, R560
                </p>
                <h3 class="compatibility-list-header">PowerEdge 16th Gen Rack Series (3.5in chassis):</h3>
                <p class="compatibility-list-items">
                    R260, R360, R660, R660xs, R6615, R6625, R760, R760xa, R760xd2, R760xs, R7615, R7625, R860, R960
                </p>
                <h3 class="compatibility-list-header">PowerEdge T-Series (3.5in chassis):</h3>
                <p class="compatibility-list-items">
                    T40, T140, T340, T440, T640, T150, T350, T550, T160, T360, T560
                </p>
                <h3 class="compatibility-list-header">PowerEdge Cloud Series (3.5in chassis):</h3>
                <p class="compatibility-list-items">
                    C6420, C6520, C6525, C6615, C6620, XE7100
                </p>
                <h3 class="compatibility-list-header">PowerVault Storage Systems (3.5in chassis):</h3>
                <p class="compatibility-list-items">
                    MD2460, MD2412, MD3400, MD3800, MD3820i, ME5012, ME5084, ME4012, ME4024, ME412, ME484
                </p>
                <h3 class="compatibility-list-header">PowerEdge Modular Systems (3.5in chassis):</h3>
                <p class="compatibility-list-items">
                    MX5016s
                </p>`;    
    
    
image.addEventListener('input', () => {
    if (image.value === 'others') {
        otherImageWrapper.style.setProperty('display', 'flex', 'important'); // shows the span
    } else {
        otherImageWrapper.style.setProperty('display', 'none', 'important'); // hides the span
    }
});    
    
    const nameToUrl = {
  "SSD": "https://cdn.shopify.com/s/files/1/0011/8675/8756/files/generic_blank_SAS_SSD_8ebb12ba-0c6f-438a-acf4-8ca22beffea9.jpg?v=1762456428",
  "HDD": "https://cdn.shopify.com/s/files/1/0011/8675/8756/files/genericstorageharddrive__80066_44117b91-3b02-4c5f-8c05-7b8a6edb0bf2.jpg?v=1762283188",
  "G14":"https://cdn.shopify.com/s/files/1/0011/8675/8756/files/Dell_G14_f698568c-51fd-4b99-92ec-7dbe2d639e82.webp?v=1764684877",
  "G13":"https://cdn.shopify.com/s/files/1/0011/8675/8756/files/DellG13_ecd63698-5c98-43b9-8953-c8658b7c5653.webp?v=1763153403"      
};
    
 // -------------------------------
    // Helpers
    // -------------------------------
function escapeHTML(str) {
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }    
    
 
function toggleSSDFields() {
    if (ssdRadio.checked) {
        // Hide spindle and cache inputs
        spindleInput.forEach(el => el.style.setProperty('display', 'none', 'important'));
        cacheInput.forEach(el => el.style.setProperty('display', 'none', 'important'));
        // Show endurance input
        enduranceInput.forEach(el => el.style.setProperty('display', 'flex', 'important'));
        ebayTableSSD.style.setProperty('display', 'block', 'important');
        ebayTableHDD.style.setProperty('display', 'none', 'important');
        flash.style.setProperty('display', 'flex', 'important');
        write.style.setProperty('display', 'flex', 'important');
        recording.style.setProperty('display', 'none', 'important');
        ebayTabHDD.style.setProperty('display', 'none', 'important');
        ebayTabSSD.style.setProperty('display', 'block', 'important');
        // Set typeSelect value
        if (typeSelect) typeSelect.value = 'Solid State Drive';
  
const series = document.getElementById('series');
        
series.addEventListener('input', () => {
    const seriesValue = series.value.toLowerCase().trim();
    console.log("Series lowercase:", seriesValue);
    if (seriesValue.includes("14")) {
        image.value = nameToUrl.G14;
        tray.value = "2.5 inch Dell G14 tray DXD9H";
    } else if (seriesValue.includes("13")) {
        image.value = nameToUrl.G13;
        tray.value = "2.5 inch Dell G13 tray G176J";
    } else {
        image.value = nameToUrl.SSD;
        tray.value = "Bare Drive";
    }
});  
        
        image.value = nameToUrl.SSD;
        tray.value = "Bare Drive";
        // Set formFactor to 2.5
        if (formFactorInput) formFactorInput.value = '2.5';
    } else if (hddRadio.checked) {
        // Show spindle and cache inputs
        spindleInput.forEach(el => el.style.removeProperty('display'));
        cacheInput.forEach(el => el.style.removeProperty('display'));
        ebayTableSSD.style.setProperty('display', 'none', 'important');
        ebayTableHDD.style.setProperty('display', 'block', 'important');
        flash.style.setProperty('display', 'none', 'important');
        write.style.setProperty('display', 'none', 'important');
        recording.style.setProperty('display', 'flex', 'important');
        ebayTabHDD.style.setProperty('display', 'block', 'important');
        ebayTabSSD.style.setProperty('display', 'none', 'important');
        // Hide endurance input
        enduranceInput.forEach(el => el.style.setProperty('display', 'none', 'important'));
        // Reset typeSelect value
        if (typeSelect) typeSelect.value = 'Hard Drive';
        
  
const series = document.getElementById('series');
series.addEventListener('input', () => {
    const seriesValue = series.value.toLowerCase().trim();
    console.log("Series lowercase:", seriesValue);
    if (seriesValue.includes("14")) {
        image.value = nameToUrl.G14;
        tray.value = "3.5 inch Dell G14 tray X7K8W";
    } else if (seriesValue.includes("13")) {
        image.value = nameToUrl.G13;
        tray.value = "3.5 inch Dell G13 tray F238F";
    } else {
        image.value = nameToUrl.HDD;
        tray.value = "Bare Drive";
    }
});  
        image.value = nameToUrl.HDD;
        tray.value = "Bare Drive";
        // Reset formFactor to original
        if (formFactorInput) formFactorInput.value = defaultFormFactor;
    }
}
// Initial check on page load
toggleSSDFields();
// Listen for changes on both radios
ssdRadio.addEventListener('change', toggleSSDFields);
hddRadio.addEventListener('change', toggleSSDFields);
    // -------------------------------
    // Tabs functionality
    // -------------------------------
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
            document.getElementById(btn.dataset.tab).style.display = 'block';
        });
    });
    // -------------------------------
    // CSV export function
    // -------------------------------
    function exportTableToCSV(tableId, filename) {
        const table = document.getElementById(tableId);
        const rows = table.querySelectorAll('tr');
        const csv = [];
        rows.forEach(row => {
            const cols = row.querySelectorAll('th, td');
            const rowData = [];
            cols.forEach(col => {
                let data = col.innerText.replace(/"/g, '""');
                rowData.push('"' + data + '"');
            });
            csv.push(rowData.join(','));
        });
        const csvFile = new Blob([csv.join('\n')], { type: 'text/csv' });
        const downloadLink = document.createElement('a');
        downloadLink.download = filename;
        downloadLink.href = window.URL.createObjectURL(csvFile);
        downloadLink.click();
    }
    function getTodayDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // month is 0-indexed
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}
    
document.getElementById('exportShopify')?.addEventListener('click', () => {
    const fileName = `shopify_${getTodayDate()}.csv`;
    exportTableToCSV('shopify-table', fileName);
});
document.getElementById('exportEbay')?.addEventListener('click', () => {
    const fileName = `ebay_${getTodayDate()}.csv`;
    exportTableToCSV('ebay-table', fileName);
});
document.getElementById('exportEbaySSD')?.addEventListener('click', () => {
    const fileName = `ebaySSD_${getTodayDate()}.csv`;
    exportTableToCSV('ebay-tableSSD', fileName);
});
document.getElementById('exportMetafields')?.addEventListener('click', () => {
    const fileName = `metafields_${getTodayDate()}.csv`;
    exportTableToCSV('metafields-table', fileName);
});
  
    // -------------------------------
    // Modal for price confirmation
    // -------------------------------
    function showPriceConfirmModal() {
        return new Promise((resolve) => {
            // Create modal overlay
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            `;
            
            // Create modal content
            const modal = document.createElement('div');
            modal.style.cssText = `
                background: white;
                padding: 30px;
                border-radius: 8px;
                max-width: 500px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            `;
            
            modal.innerHTML = `
                <h3 style="margin-top: 0; color: #333;">Price Input Missing</h3>
                <p style="color: #666; line-height: 1.6;">
                    One or more price fields are empty. Do you want to continue and use the default price of <strong>$799.99</strong> for empty fields?
                </p>
                <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                    <button id="modalCancel" style="
                        padding: 10px 20px;
                        border: 1px solid #ccc;
                        background: white;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 14px;
                    ">Cancel</button>
                    <button id="modalConfirm" style="
                        padding: 10px 20px;
                        border: none;
                        background: #007bff;
                        color: white;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 14px;
                    ">Yes, Continue</button>
                </div>
            `;
            
            overlay.appendChild(modal);
            document.body.appendChild(overlay);
            
            // Event listeners
            document.getElementById('modalConfirm').addEventListener('click', () => {
                document.body.removeChild(overlay);
                resolve(true);
            });
            
            document.getElementById('modalCancel').addEventListener('click', () => {
                document.body.removeChild(overlay);
                resolve(false);
            });
            
            // Close on overlay click
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                    resolve(false);
                }
            });
        });
    }

//warranty modal
    function showNoWarrantyModal(message = "Missing warranty validity. Please select a warranty before continuing.") {
  return new Promise((resolve) => {
    // Overlay
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,.45);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100000;
      padding: 16px;
    `;

    // Modal
    const modal = document.createElement("div");
    modal.style.cssText = `
      width: 100%;
      max-width: 420px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,.25);
      overflow: hidden;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    `;

    modal.innerHTML = `
      <div style="padding:16px 18px; border-bottom:1px solid #eee;">
        <div style="font-size:16px; font-weight:700; color:#111;">Missing Warranty</div>
      </div>
      <div style="padding:16px 18px; color:#444; line-height:1.5;">
        ${message}
      </div>
      <div style="display:flex; justify-content:flex-end; gap:10px; padding:14px 18px; border-top:1px solid #eee;">
        <button id="nw_ok" style="
          border:none;
          background:#111827;
          color:#fff;
          padding:10px 14px;
          border-radius:8px;
          cursor:pointer;
          font-weight:600;
        ">OK</button>
      </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const cleanup = () => {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      document.removeEventListener("keydown", onKey);
    };

    const onKey = (e) => {
      if (e.key === "Escape") {
        cleanup();
        resolve(false);
      }
    };

    document.addEventListener("keydown", onKey);

    modal.querySelector("#nw_ok").addEventListener("click", () => {
      cleanup();
      resolve(true);
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        cleanup();
        resolve(false);
      }
    });
  });
}
    
    
    
    
    
    
    // -------------------------------
    // Generate button
    // -------------------------------
    const generateBtn = document.querySelector('.btn-generate');
    if (!generateBtn) return;
generateBtn.addEventListener('click', async () => {
    
    const newWarranty = document.getElementById('newWarranty')?.value;
    const recertifiedWarranty = document.getElementById('recertifiedWarranty')?.value;
    const refurbishedWarranty = document.getElementById('refurbishedWarranty')?.value;
    const ebayWarranty = document.getElementById('ebayWarranty')?.value;
    
    const shopifyTableBody = document.querySelector('#shopify-table tbody');
    const metafieldsTableBody = document.querySelector('#metafields-table tbody');
    const ebayTableBody = document.querySelector('#ebay-table tbody');
    const ebayTableBodySSD = document.querySelector('#ebay-tableSSD tbody');
    const isSSD = ssdRadio.checked;
    
    // Get price values
    const priceNew = document.getElementById('priceNew')?.value;
    const priceMR = document.getElementById('priceMR')?.value;
    const priceSR = document.getElementById('priceSR')?.value;
    
    // Check if any price is empty
    const hasEmptyPrice = !priceNew || !priceMR || !priceSR;
    
    const hasEmptyWarranty = !newWarranty || !recertifiedWarranty || !refurbishedWarranty || !ebayWarranty;
    
    if(hasEmptyWarranty){
        showNoWarrantyModal();
        return;
    }
    
    // If prices are empty, show modal and ask for confirmation
    if (hasEmptyPrice) {
        const userConfirmed = await showPriceConfirmModal();
        if (!userConfirmed) {
            return; // User cancelled, stop execution
        }
    }
    
    // Default price constant
    const DEFAULT_PRICE = '799.99';
    
    const data = {
        brand: document.getElementById('brand')?.value,
        series: document.getElementById('series')?.value,
        partNumber: document.getElementById('partNumber')?.value,
        modelNumber: document.getElementById('modelNumber')?.value,
        capacity: document.getElementById('capacity')?.value,
        formFactor: document.getElementById('formFactor')?.value,
        interfaceVal: document.getElementById('interface')?.value,
        interfaceSpeed: document.getElementById('speed')?.value,
        sectorSize: document.getElementById('sectorSize')?.value,
        spindleSpeed: isSSD ? '' : document.getElementById('spindleSpeed')?.value, // blank for SSD
        cache: isSSD ? '' : document.getElementById('cache')?.value, // blank for SSD
        endurance: isSSD ? document.getElementById('endurance')?.value : '',
        tray: document.getElementById('tray')?.value,
        priceNew: priceNew || DEFAULT_PRICE,
        image: document.getElementById('image')?.value,
        typeSelect: isSSD ? 'Solid State Drive' : document.getElementById('typeSelect')?.value,
        condition: document.getElementById('condition')?.value,
        conditionNote: document.getElementById('conditionNote')?.value,
        flash: document.getElementById('flash')?.value,
        write: document.getElementById('writeSpeed')?.value,
        read: document.getElementById('readSpeed')?.value,
        features: document.getElementById('features')?.value,
        recordingTech: document.getElementById('recordingTech')?.value,
        newWarranty: document.getElementById('newWarranty')?.value,
        recertifiedWarranty: document.getElementById('recertifiedWarranty')?.value,
        refubishedWarranty: document.getElementById('refurbishedWarranty')?.value,
        typeHDD: document.getElementById('hdd')?.value,
        datasheetName: document.getElementById('datasheetName')?.value,
        datasheetLink: document.getElementById('datasheetLink')?.value,
        noteNB: document.getElementById('noteNB')?.value,
        noteMR: document.getElementById('noteMR')?.value,
        noteSR: document.getElementById('noteSR')?.value,
        priceMR: priceMR || DEFAULT_PRICE,
        priceSR: priceSR || DEFAULT_PRICE
    };
    
console.log('datas:', data);
    
    let skuTypes ="";
     skuTypes = [
            { checkboxId: 'new', skuId: 'sku_new', conditionText: 'New', validity: data.newWarranty, note: data.noteNB },
            { checkboxId: 'recertified', skuId: 'sku_recertified', conditionText: 'Manufacturer Recertified', validity: data.recertifiedWarranty, note: data.noteMR },
            { checkboxId: 'refurbished', skuId: 'sku_refurbished', conditionText: 'Seller Refurbished', validity: data.refubishedWarranty, note: data.noteSR }
        ];   

        
        skuTypes.forEach(type => {
            const checked = document.getElementById(type.checkboxId)?.checked;
            const sku = document.getElementById(type.skuId)?.value;
            if (!checked || !sku) return;
            let driveTypeText = '';
            if (type.conditionText === 'New') driveTypeText = 'Hard Drive';
            else if (type.conditionText === 'Manufacturer Recertified') driveTypeText = 'Recertified Hard Drive';
            else if (type.conditionText === 'Seller Refurbished') driveTypeText = 'Refurbished Hard Drive';
            
            let driveTypeSEO = '';
            
            if (isSSD){
                if (type.conditionText === 'New') driveTypeSEO = 'SSD';
            else if (type.conditionText === 'Manufacturer Recertified') driveTypeSEO = 'Recertified SSD';
            else if (type.conditionText === 'Seller Refurbished') driveTypeSEO = 'Refurbished SSD';
            }else{
                if (type.conditionText === 'New') driveTypeSEO = 'HDD';
            else if (type.conditionText === 'Manufacturer Recertified') driveTypeSEO = 'Recertified HDD';
            else if (type.conditionText === 'Seller Refurbished') driveTypeSEO = 'Refurbished HDD';
            }
            
            
            let driveTypeCondition = '';
            if (type.conditionText === 'New') driveTypeCondition = 'New';
            else if (type.conditionText === 'Manufacturer Recertified') driveTypeCondition = 'Refurbished';
            else if (type.conditionText === 'Seller Refurbished') driveTypeCondition = 'Used';
const cond = type.conditionText?.toLowerCase();
let price = '';
if (cond === 'new') price = data.priceNew;
else if (cond === 'manufacturer recertified') price = data.priceMR;
else if (cond === 'seller refurbished') price = data.priceSR;
            
            let handle = "";
            
   // -------------------------------
    // Helpers
    // -------------------------------
    function escapeHTML(str) {
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
let ebaySeries = "";          
if (['generation 14'].includes(data.series?.toLowerCase())){
   ebaySeries = "G14";
}else if (['generation 13'].includes(data.series?.toLowerCase())){
   ebaySeries = "G13"; 
}else{
    ebaySeries = data.series;
}
function buildConditionLinks(data, currentCondition) {
    // Compute base handle from product info WITHOUT any condition text
    
    let baseHandle = "";
if(isSSD){
    if (typeof data.tray === 'string' && data.tray.toLowerCase().includes('hybrid')){
       baseHandle = `${data.brand} ${ebaySeries} ${data.modelNumber} ${data.partNumber} ${data.capacity} ${data.endurance} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} Hybrid ${data.formFactor}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, ''); 
    }else{
    baseHandle = `${data.brand} ${ebaySeries} ${data.modelNumber} ${data.partNumber} ${data.capacity} ${data.endurance} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} ${data.formFactor}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
        }
}else{
    
   baseHandle = `${data.brand} ${ebaySeries} ${data.modelNumber} ${data.partNumber} ${data.capacity} ${data.spindleSpeed} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} ${data.cache} ${data.formFactor}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}    
    
let conditions ="";
    if(isSSD){
        conditions = [
        { name: "New", suffix: "-ssd" },
        { name: "Manufacturer Recertified", suffix: "-recertified-ssd" },
        { name: "Seller Refurbished", suffix: "-refurbished-ssd" }
    ];
    }else{
        conditions = [
        { name: "New", suffix: "-hdd" },
        { name: "Manufacturer Recertified", suffix: "-recertified-hdd" },
        { name: "Seller Refurbished", suffix: "-refurbished-hdd" }
            ];
    }
   
    let html = `<ul>`;
    conditions.forEach(cond => {
        if (cond.name === currentCondition) {
            html += `<li class="selected-option"><a>${escapeHTML(cond.name)}</a></li>`;
        } else {
            html += `<li><a href="https://serverpartdeals.com/products/${baseHandle}${cond.suffix}">${escapeHTML(cond.name)}</a></li>`;
        }
    });
    html += `</ul>`;
    return html;
} 

let shopFormFactor ='';
            
if(data.formFactor === '2.5'){
    shopFormFactor = `${data.formFactor}"`;
}else{
    shopFormFactor = `${data.formFactor}`;
}
            
let dataSheetEL = "";

if (data.datasheetName && data.datasheetLink) {
  dataSheetEL = `
    <th scope="row">Datasheet</th>
    <td>
      <a 
        rel="noopener" 
        href="${escapeHTML(data.datasheetLink)}" 
        target="_blank"
      >
        ${escapeHTML(data.datasheetName)}
      </a>
    </td>
  `;
}           
            
            
function generateMetafieldsHTML(data, type, isSSD) {
    let metafieldsHTML = "";
    if (isSSD) {
        metafieldsHTML = `
<h5>${type.note}</h5>
<div class="option-section">
    <h4>Options</h4>
    ${buildConditionLinks(data, type.conditionText)}
</div>
<div class="option-values">
    <table class="metafield-description-table">
        <tbody>
            <tr><th scope="row">Capacity</th><td>${escapeHTML(data.capacity)}</td></tr>
            <tr><th scope="row">Interface</th><td>${escapeHTML(data.interfaceVal)} ${escapeHTML(data.interfaceSpeed)}</td></tr>
            <tr><th scope="row">Form Factor</th><td>${escapeHTML(shopFormFactor)}</td></tr>
            <tr><th scope="row">Endurance</th><td>${escapeHTML(data.endurance)}</td></tr>
            <tr><th scope="row">Condition</th><td>${escapeHTML(type.conditionText)}</td></tr>
            <tr><th scope="row">Warranty</th><td>${escapeHTML(type.validity)}</td></tr>
            <tr>${dataSheetEL}</tr>
        </tbody>
    </table>
</div>`;
    } else {
        metafieldsHTML = `
<h5>${type.note}</h5>
<div class="option-section">
    <h4>Options</h4>
    ${buildConditionLinks(data, type.conditionText)}
</div>
<div class="option-values">
    <table class="metafield-description-table">
        <tbody>
            <tr><th scope="row">Capacity</th><td>${escapeHTML(data.capacity)}</td></tr>
            <tr><th scope="row">Interface</th><td>${escapeHTML(data.interfaceVal)} ${escapeHTML(data.interfaceSpeed)}</td></tr>
            <tr><th scope="row">Form Factor</th><td>${escapeHTML(data.formFactor)}"</td></tr>
            <tr><th scope="row">Spindle Speed</th><td>${escapeHTML(data.spindleSpeed)}</td></tr>
            <tr><th scope="row">Condition</th><td>${escapeHTML(type.conditionText)}</td></tr>
            <tr><th scope="row">Warranty</th><td>${escapeHTML(type.validity)}</td></tr>
            <tr>
            ${dataSheetEL}
            </tr>
        </tbody>
    </table>
</div>`;
    }
    return escapeHTML(metafieldsHTML);
}
    function generateSpecsHTML(data, isSSD) {
if (isSSD) {        
        return `
<hr><!-- more -->        
<details>
<summary>Specifications</summary>
<table width="100%">
<tbody>
<tr><td>Brand</td><td>${data.brand}</td></tr>
<tr><td>Series</td><td>${data.series}</td></tr>
<tr><td>Model Number</td><td>${data.modelNumber}</td></tr>
<tr><td>Part Number</td><td>${data.partNumber}</td></tr>
<tr><td>Form Factor</td><td>${shopFormFactor}</td></tr>
<tr><td>Capacity</td><td>${data.capacity}</td></tr>
<tr><td>Interface</td><td>${data.interfaceVal} ${data.interfaceSpeed}</td></tr>
<tr><td>Endurance</td><td>${data.endurance}</td></tr>
<tr><td>Tray</td><td>${data.tray}</td></tr>
<tr><td>Weight</td><td>0.5lb</td></tr>
<tr><td>Width</td><td>2.7in</td></tr>
<tr><td>Height</td><td>0.4in</td></tr>
<tr><td>Depth</td><td>4in</td></tr>
</tbody>
</table>
</details>`;
    
}else if (data.typeHDD === "hdd" && data.formFactor === '2.5'){
return `
<hr><!-- more -->
<details>
<summary>Specifications</summary>
<table width="100%">
<tbody>
<tr><td>Brand</td><td>${data.brand}</td></tr>
<tr><td>Series</td><td>${data.series}</td></tr>
<tr><td>Model Number</td><td>${data.modelNumber}</td></tr>
<tr><td>Part Number</td><td>${data.partNumber}</td></tr>
<tr><td>Form Factor</td><td>${data.formFactor}"</td></tr>
<tr><td>Capacity</td><td>${data.capacity}</td></tr>
<tr><td>Interface</td><td>${data.interfaceVal} ${data.interfaceSpeed}</td></tr>
<tr><td>Spindle Speed</td><td>${data.spindleSpeed}</td></tr>
<tr><td>Tray</td><td>${data.tray}</td></tr>
<tr><td>Weight</td><td>0.5lb</td></tr>
<tr><td>Width</td><td>2.7in</td></tr>
<tr><td>Height</td><td>0.4in</td></tr>
<tr><td>Depth</td><td>4in</td></tr>
</tbody>
</table>
</details>`;
} else {
return `
<hr><!-- more -->
<details>
<summary>Specifications</summary>
<table width="100%">
<tbody>
<tr><td>Brand</td><td>${data.brand}</td></tr>
<tr><td>Series</td><td>${data.series}</td></tr>
<tr><td>Model Number</td><td>${data.modelNumber}</td></tr>
<tr><td>Part Number</td><td>${data.partNumber}</td></tr>
<tr><td>Form Factor</td><td>${data.formFactor}"</td></tr>
<tr><td>Capacity</td><td>${data.capacity}</td></tr>
<tr><td>Interface</td><td>${data.interfaceVal} ${data.interfaceSpeed}</td></tr>
<tr><td>Spindle Speed</td><td>${data.spindleSpeed}</td></tr>
<tr><td>Tray</td><td>${data.tray}</td></tr>
<tr><td>Weight</td><td>2lb</td></tr>
<tr><td>Width</td><td>4in</td></tr>
<tr><td>Height</td><td>1in</td></tr>
<tr><td>Depth</td><td>5.8in</td></tr>
</tbody>
</table>
</details>`;
}
}
          
            
            
            
            
if (isSSD) {
    // SSD Handle version  NO spindle, NO cache, WITH endurance
    if(typeof data.tray === 'string' &&data.tray.toLowerCase().includes('hybrid')){
        handle = `${data.brand} ${ebaySeries} ${data.modelNumber} ${data.partNumber} ${data.capacity} ${data.endurance} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} Hybrid ${data.formFactor} ${driveTypeSEO}`;
    }else{
    handle = `${data.brand} ${ebaySeries} ${data.modelNumber} ${data.partNumber} ${data.capacity} ${data.endurance} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} ${data.formFactor} ${driveTypeSEO}`;
        }
} else {
    // HDD Handle version  includes spindle + cache
    handle = `${data.brand} ${ebaySeries} ${data.modelNumber} ${data.partNumber} ${data.capacity} ${data.spindleSpeed} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} ${data.cache} ${data.formFactor} ${driveTypeSEO}`;
}
// Slugify
handle = handle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
data.handle = handle;
            // Metafields table row
            const metaRow = document.createElement('tr');
            metaRow.innerHTML = `<td>${handle}</td><td>${generateMetafieldsHTML(data, type, isSSD)}</td>`;
            metafieldsTableBody.appendChild(metaRow);
            // Shopify table row
            let title = "";
if (isSSD) {
    if (data.formFactor === '2.5'){
    title = `${data.brand} ${ebaySeries} ${data.modelNumber} ${data.partNumber} ${data.capacity} ${data.endurance} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} ${data.formFactor}in ${driveTypeSEO}`;
    }else if (data.formFactor === '3.5' && typeof data.tray === 'string' && data.tray.toLowerCase().includes('hybrid')) {
    title = `${data.brand} ${ebaySeries} ${data.modelNumber} ${data.partNumber} ${data.capacity} ${data.endurance} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} Hybrid ${data.formFactor}in ${driveTypeSEO}`; 
    }else {
     title = `${data.brand} ${ebaySeries} ${data.modelNumber} ${data.partNumber} ${data.capacity} ${data.endurance} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} ${data.formFactor} ${driveTypeSEO}`;      
    }
} else {
    // HDD Title Version
    title = `${data.brand} ${ebaySeries} ${data.modelNumber} ${data.partNumber} ${data.capacity} ${data.spindleSpeed} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} ${data.cache} ${data.formFactor}in ${driveTypeSEO}`;
}
            
let SEOTitle = "";           
 if (['generation 14', 'generation 13'].includes(data.series?.toLowerCase())){
    SEOTitle = `${data.brand} ${ebaySeries} ${data.modelNumber} ${data.partNumber} ${data.capacity} ${data.interfaceVal} ${data.formFactor}" PowerEdge Server ${driveTypeSEO}`;
 }else{
     if (data.formFactor === '2.5' || data.formFactor === '3.5'){
    SEOTitle = `${data.brand} ${ebaySeries} ${data.modelNumber} ${data.partNumber} ${data.capacity} ${data.interfaceVal} ${data.formFactor}" ${driveTypeSEO}`;
     }else{
         SEOTitle = `${data.brand} ${ebaySeries} ${data.modelNumber} ${data.partNumber} ${data.capacity} ${data.interfaceVal} ${data.formFactor} ${driveTypeSEO}`;
     }
 }             
                      
            
            const specsHTML = generateSpecsHTML(data, isSSD);
            let warrantyHTML = `<details>
    <summary><span class="headline">Warranty</span></summary>
    <div class="indent-content">
        <div id="warranty">
            <div class="option-values">
                <table class="metafield-warranty-table">
                    <tbody>
                        <tr>
                            <td>
                                <div><span>Condition: ${type.conditionText} - ${type.validity} Limited Period Warranty</div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Satisfaction Guarantee: Return for refund within 30 days of package reception date.</td>
                        </tr>
                        <tr>
                            <td>This item is covered by serverpartdeals.com <a
                                    href="https://serverpartdeals.com/pages/return-policy">Return Policy</a></td>
                        </tr>
                        <tr>
                            <td>To initiate a return please fill out the <a
                                    href="https://serverpartdeals.com/pages/return-form">Return Form</a></td>
                        </tr>
                        <tr>
                            <td>For frequently asked questions about warranties and returns please visit our <a
                                    href="https://serverpartdeals.com/pages/faqs">FAQs</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</details>`;

if (isSSD){
if (data.series) {
    const seriesLower = data.series.toLowerCase();
    if (seriesLower === 'generation 13' && data.formFactor ==='3.5') {
        warrantyHTML += COMPAT_HTML_DELL_SSD_GEN13_HYBRID;
    }else if (seriesLower === 'generation 14' && data.formFactor ==='3.5') {
        warrantyHTML += COMPAT_HTML_DELL_SSD_GEN14_HYBRID;
    }
    else if (seriesLower === 'generation 13') {
        warrantyHTML += COMPAT_HTML_DELL_SSD_GEN13;
    } else if (seriesLower === 'generation 14') {
        warrantyHTML += COMPAT_HTML_DELL_SSD_GEN14;
    }else if (seriesLower === 'generation 8') {
  warrantyHTML += COMPAT_HTML_SSD_GEN8;
} else if (seriesLower === 'generation 9') {
  warrantyHTML += COMPAT_HTML_SSD_GEN9;
} else if (seriesLower === 'generation 10') {
  warrantyHTML += COMPAT_HTML_SSD_GEN10;
} else if (seriesLower === 'generation 11') {
  warrantyHTML += COMPAT_HTML_SSD_GEN11;
}
}    
}else{
   if (data.series) {
    const seriesLower = data.series.toLowerCase();
if (seriesLower === 'generation 13' && data.formFactor ==='2.5') {
        warrantyHTML += COMPAT_HTML_DELL_SSD_GEN13; 
}else if (seriesLower === 'generation 14' && data.formFactor ==='2.5') {
        warrantyHTML += COMPAT_HTML_DELL_SSD_GEN14;
   }else if (seriesLower === 'generation 13') {
        warrantyHTML += COMPAT_HTML_DELL_HDD_GEN13;
    } else if (seriesLower === 'generation 14') {
        warrantyHTML += COMPAT_HTML_DELL_HDD_GEN14;
    }else if (seriesLower === 'generation 8') {
  warrantyHTML += COMPAT_HTML_HDD_GEN8;
} else if (seriesLower === 'generation 9') {
  warrantyHTML += COMPAT_HTML_HDD_GEN9;
} else if (seriesLower === 'generation 10') {
  warrantyHTML += COMPAT_HTML_HDD_GEN10;
} else if (seriesLower === 'generation 11') {
  warrantyHTML += COMPAT_HTML_HDD_GEN11;
}
} 
}            


// Escape HTML as usual
const bodyHTML = escapeHTML(specsHTML + warrantyHTML);

            const newRow = document.createElement('tr');
            
// -------------------------------
// Data tag helpers
// -------------------------------
function parseCapacity(capacity) {
    let num = 0;
    let unit = 'GB';
    const cap = capacity.toUpperCase().trim();

    if (cap.endsWith('TB')) {
        num = parseFloat(cap.replace('TB', '')) * 1024; // convert TB to GB
        unit = 'TB';
    } else if (cap.endsWith('GB')) {
        num = parseFloat(cap.replace('GB', ''));
    }
    return num; // always in GB
}

function getCapacityGroup(capacity) {
    const gb = parseCapacity(capacity);
    if (gb < 300) return 'under 300GB';
    if (gb >= 300 && gb <= 2400) return '300GB to 2.4TB';
    if (gb > 2400 && gb <= 8192) return '2TB to 8TB';
    if (gb > 8192) return '8TB and greater';
    return 'unknown';
}

function isHighCapacity(capacity) {
    const gb = parseCapacity(capacity);
    return gb > 8192 ? 'Y' : 'N'; // >8TB
}

function getSkuCondition(conditionText) {
    const map = { 'New': 'NB', 'Manufacturer Refurbished': 'MR', 'Seller Refurbished': 'SR' };
    return map[conditionText] || '';
}
function getTitleCondition(conditionText) {
    const mapTitle = {'New': 'New', 'Manufacturer Refurbished': 'Recertified', 'Seller Refurbished': 'Refurbished' };
    return mapTitle[conditionText] || '';
}
            
function generateDataTag(data, type) {
    const capacityGroup = getCapacityGroup(data.capacity);
    const highCapacity = isHighCapacity(data.capacity);
    const skuCondition = getSkuCondition(type.conditionText);
    const titleCondition = getTitleCondition(type.conditionText);
if (isSSD){
    const tag = `brand:${data.brand},capacity:${data.capacity},capacityGroup:${capacityGroup},condition:${type.conditionText},formFactor:${data.formFactor},highCapacity:${highCapacity},interface:${data.interfaceVal},interfaceSpeed:${data.interfaceSpeed},series:${data.series},skuCondition:${skuCondition},type:Solid State Drives,warranty:${type.validity},spindleSpeed:${data.spindleSpeed},000CardTitle:${titleCondition} ${data.series} ${data.capacity} ${data.interfaceVal} SSD ${data.modelNumber}`;
return tag;
}else{
  const tag = `brand:${data.brand},capacity:${data.capacity},capacityGroup:${capacityGroup},condition:${type.conditionText},formFactor:${data.formFactor},highCapacity:${highCapacity},interface:${data.interfaceVal},interfaceSpeed:${data.interfaceSpeed},series:${data.series},skuCondition:${skuCondition},type:Hard Drives,warranty:${type.validity},spindleSpeed:${data.spindleSpeed},000CardTitle:${titleCondition} ${data.series} ${data.capacity} ${data.interfaceVal} HDD ${data.modelNumber}`;  
return tag;
}
    
}            
const dataTag = generateDataTag(data, type); // generate tag for this row
newRow.setAttribute('data-tag', dataTag); // attach as a custom attribute            
            
           let interfaceHTML;
if (isSSD) {
    interfaceHTML = `${data.typeSelect}s > ${data.capacity} > ${data.formFactor} > ${data.interfaceVal}`;
} else {
    interfaceHTML = `${data.typeSelect}s > ${data.capacity} > ${data.formFactor} > ${data.interfaceVal} > ${data.spindleSpeed}`;
}
let variantGram ="";
 if (isSSD){
     variantGram = "226.796";
 }else{
     variantGram = "908";
 }    

let finalImage = "";
 if(data.image !== "others"){
    finalImage = data.image;
}else if (data.image === "others"){
   finalImage = otherImage.value;
}           
            
newRow.innerHTML = `
<td>${handle}</td>
<td>${title}</td>
<td>${bodyHTML}</td>
<td>${data.brand}</td>
<td>${interfaceHTML}</td>
<td>${dataTag}</td>
<td>TRUE</td>
<td>Title</td>
<td>Default Title</td><td></td><td></td><td></td><td></td>
<td>${sku}</td>
<td>${variantGram}</td>
<td>shopify</td>
<td>0</td>
<td>deny</td>
<td>Manual</td>
<td>${price}</td>
<td></td><td>TRUE</td><td>TRUE</td>
<td></td><td>${finalImage}</td>
<td>1</td>
<td>${title}</td>
<td>false</td>
<td>${SEOTitle}</td>
<td>Buy the ${data.brand} ${data.series} ${data.capacity} ${data.interfaceVal} ${data.formFactor} ${data.modelNumber} ${data.partNumber} at the lowest price with free & fast shipping. Get volume discounts and excellent customer service. Shop now!</td>
<td>Electronics > Electronics Accessories > Computer Components > Storage Devices > Hard Drives</td>
<td></td><td></td><td>${data.modelNumber}</td><td></td><td></td><td>${driveTypeCondition}</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
<td>lb</td>
<td></td><td></td>`;
            shopifyTableBody.appendChild(newRow);
        });

        // eBay table row
        const ebaySKU = document.getElementById('ebaySKU')?.value;
        if (ebaySKU) {
            const row = document.createElement('tr');
            
  let ebaySeries = "";          
if (['generation 14'].includes(data.series?.toLowerCase())){
   ebaySeries = "G16";
}else if (['generation 13'].includes(data.series?.toLowerCase())){
   ebaySeries = "G13"; 
}else{
    ebaySeries = data.series;
}
            
            
     let ebayTitle ="";       
   if(isSSD){
       if (['generation 14','generation 13'].includes(data.series?.toLowerCase())){
         if (data.formFactor === '2.5'){
         ebayTitle =`${data.brand} ${data.capacity} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} ${data.endurance} ${data.formFactor}" SSD ${data.modelNumber} ${ebaySeries}`;    
         }else if(data.formFactor === '3.5' && typeof data.tray === 'string' && data.tray.toLowerCase().includes('hybrid')){
         ebayTitle =`${data.brand} ${data.capacity} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} ${data.endurance} ${data.formFactor}" SSD ${data.modelNumber} Hybrid ${ebaySeries}`;    
         }else{
            ebayTitle =`${data.brand} ${data.capacity} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} ${data.endurance} ${data.formFactor} SSD ${data.modelNumber} ${ebaySeries}`; 
         }
       }else{
         if (data.formFactor === '2.5'){  
        ebayTitle =`${data.brand} ${data.series} ${data.capacity} ${data.modelNumber} ${data.partNumber} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} ${data.endurance} ${data.formFactor}" SSD`;
         }else{
        ebayTitle =`${data.brand} ${data.series} ${data.capacity} ${data.modelNumber} ${data.partNumber} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} ${data.endurance} ${data.formFactor} SSD`;

         }
       }
   }else{
       if (['generation 14','generation 13'].includes(data.series?.toLowerCase())){
         ebayTitle =`${data.brand} ${data.capacity} ${data.spindleSpeed} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} ${data.formFactor}" HDD ${data.modelNumber} ${ebaySeries}`;  
       }else{
        ebayTitle =`${data.brand} ${data.series} ${data.capacity} ${data.modelNumber} ${data.partNumber} ${data.spindleSpeed} ${data.interfaceVal} ${data.interfaceSpeed} ${data.sectorSize} ${data.formFactor}" HDD`;  
       }
       
   } 
   
            
            
    let conditionID ="";
            if(isSSD){
                conditionID = "Solid State Drives";
            }else {
                conditionID ="Internal Hard Disk Drives";
            }
const ebayWarranty = document.getElementById('ebayWarranty')?.value;    
            
 
           
            
let ebayDescription = "";
let ebayDescriptionTray ="";          
if(data.tray == "Bare Drive"){
    
} else{
ebayDescriptionTray = data.tray ? 
        `<li>Ships installed in a ${data.tray}</li>` : 
        "";    
}           


            
if (isSSD) {

    // Build conditional lines only when data exists
    const enduranceLine = data.endurance ? 
        `<li>Endurance & Reliability: Rated at roughly ${data.endurance}</li>` : 
        "";

    const featuresLine = data.features ? 
        `<li>Features: ${data.features}</li>` : 
        "";

    ebayDescription = `
        <h4>Key Features</h4>
        <ul>
            <li>Model: ${data.brand} ${data.modelNumber} ${data.capacity} ${data.formFactor} Solid State Drive</li>
            <li>Interface: ${data.interfaceVal} ${data.interfaceSpeed} with ${data.flash}</li>
            <li>Performance: read speed up to ${data.read} and sequential write speed up to ${data.write}</li>
            ${enduranceLine}
            ${featuresLine}
            ${ebayDescriptionTray}
        </ul>

        <h4>Ideal Applications</h4>
        <ul>
            <li>Enterprise servers & storage arrays</li>
            <li>Cloud & hyperscale deployments</li>
            <li>Backup & archiving solutions</li>
            <li>Big data and analytics workloads</li>
        </ul>
    `;
}else{
  const featuresLine = data.features ? 
        `<li>Features: ${data.features}</li>` : 
        "";  
    
 ebayDescription =`
<h4>Key Features</h4>
<ul>
    <li>Model: ${data.partNumber} - ${data.series} ${data.modelNumber} -- ${data.capacity} ${data.interfaceVal} ${data.formFactor} Hard Drive</li>
    <li>Interface: ${data.interfaceVal} ${data.interfaceSpeed} with ${data.spindleSpeed} spindle speed for reliable high-throughput performance.</li>
    <li>Performance: Sustained data transfer rate up to ${data.read}</li>
    <li>Recording Technology: ${data.recordingTech} for reliable performance and compatibility</li>
    ${featuresLine}
    ${ebayDescriptionTray}
</ul>
<h4>Ideal Applications</h4>
<ul>
    <li>Enterprise servers & storage arrays</li>
    <li>Cloud & hyperscale deployments</li>
    <li>Backup & archiving solutions</li>
    <li>Big data and analytics workloads</li>
</ul> `;    
}           
// Compatibility HTML
if (isSSD){
if (data.series) {
const seriesLower = data.series.toLowerCase();
if (seriesLower === 'generation 13' && data.formFactor ==='3.5') {
ebayDescription += eBay_COMPAT_HTML_DELL_SSD_GEN13_HYBRID;
}else if (seriesLower === 'generation 14' && data.formFactor ==='3.5') {
ebayDescription += eBay_COMPAT_HTML_DELL_SSD_GEN14_HYBRID;
}
else if (seriesLower === 'generation 13') {
ebayDescription += eBay_COMPAT_HTML_DELL_SSD_GEN13;
} else if (seriesLower === 'generation 14') {
ebayDescription += eBay_COMPAT_HTML_DELL_SSD_GEN14;
}else if (seriesLower === 'generation 8') {
ebayDescription += eBay_COMPAT_HTML_SSD_GEN8;
} else if (seriesLower === 'generation 9') {
ebayDescription += eBay_COMPAT_HTML_SSD_GEN9;
} else if (seriesLower === 'generation 10') {
ebayDescription += eBay_COMPAT_HTML_SSD_GEN10;
} else if (seriesLower === 'generation 11') {
ebayDescription += eBay_COMPAT_HTML_SSD_GEN11;
}
}
}else{
if (data.series) {
const seriesLower = data.series.toLowerCase();
if (seriesLower === 'generation 13' && data.formFactor ==='2.5') {
ebayDescription += eBay_COMPAT_HTML_DELL_SSD_GEN13;
}else if (seriesLower === 'generation 14' && data.formFactor ==='2.5' ) {
ebayDescription += eBay_COMPAT_HTML_DELL_SSD_GEN14;
}else if (seriesLower === 'generation 13') {
ebayDescription += eBay_COMPAT_HTML_DELL_HDD_GEN13;
} else if (seriesLower === 'generation 14') {
ebayDescription += eBay_COMPAT_HTML_DELL_HDD_GEN14;
}else if (seriesLower === 'generation 8') {
ebayDescription += eBay_COMPAT_HTML_HDD_GEN8;
} else if (seriesLower === 'generation 9') {
ebayDescription += eBay_COMPAT_HTML_HDD_GEN9;
} else if (seriesLower === 'generation 10') {
ebayDescription += eBay_COMPAT_HTML_HDD_GEN10;
} else if (seriesLower === 'generation 11') {
ebayDescription += eBay_COMPAT_HTML_HDD_GEN11;
}
}
}       


            
            
            
            
            const ebayDescriptionHTML = escapeHTML(ebayDescription);
            
// Function to safely get element value
const getValue = (id) => document.getElementById(id)?.value || '';

// Common cells for both SSD and HDD (including shipping/location info)
const commonCells = [
  '', // empty cell
  ebaySKU,
  '',
  ebayTitle,
  ebayDescriptionHTML,
  '', '', '', '',
  conditionID,
  '', '', '', '', '', '',
  2, '', '', '', '', '', '', '', '', '', '', '',  '',// adjust empty placeholders
  0,
  '',
  getValue('ebayPrice'),
  '', '', '', '', '', '', '', '', '', '',
  data.condition,
  data.conditionNote,
  '', '', '', '',
  data.brand,
  data.brand,
  '', '', '', '', '', '', '',// placeholders to match original positions
  'US',
  'Sanford, Florida',
  '32771',
  '236774778019',
  '62557506019',
  '249125331019',
  'PackageThickEnvelope',
    '','','','','','','','','','','','','','','',
];
let ebayFormFactor = '';
            
if (data.formFactor === '2.5'){
    ebayFormFactor = ` ${data.formFactor} Inch` ;
}else{
     ebayFormFactor = ` ${data.formFactor}` ;
}           
            
// SSD specific cells
const ssdCells = [
  getValue('ebayType'),
  getValue('hours'),
  getValue('readSpeed'),
  data.interfaceVal,
  ebayFormFactor,
  data.interfaceSpeed,
  ebayWarranty,
  data.capacity,
  data.modelNumber,
  getValue('mpn'),
  getValue('imMessage'),
  getValue('features'),
  getValue('country'),
  getValue('compatible'),
  getValue('driveType'),
  getValue('storageFormat'),
  data.write,
  data.endurance,
  data.flash
];

// HDD specific cells
const hddCells = [
  getValue('ebayType'),
  getValue('hours'),
  getValue('readSpeed'),
  data.cache,
  data.spindleSpeed,
  data.interfaceVal,
  `${data.formFactor} Inch`,
  data.interfaceSpeed,
  ebayWarranty,
  getValue('recordingTech'),
  data.capacity,
  data.modelNumber,
  getValue('mpn'),
  getValue('imMessage'),
  getValue('features'),
  getValue('country'),
  getValue('compatible'),
  getValue('driveType'),
  getValue('storageFormat')
];

// Append cells dynamically
const cellsToAdd = isSSD ? [...commonCells, ...ssdCells] : [...commonCells, ...hddCells];
row.innerHTML = cellsToAdd.map(cell => `<td>${cell ?? ''}</td>`).join('');

// Append to the correct table
if (isSSD) {
  ebayTableBodySSD.appendChild(row);
} else {
  ebayTableBody.appendChild(row);
}
}
});
});
    // -------------------------------
// Make tables resizable
// -------------------------------
function makeTableResizable(table) {
    const thElements = table.querySelectorAll('th');
    thElements.forEach((th) => {
        const resizer = document.createElement('div');
        resizer.className = 'resizer';
        th.appendChild(resizer);

        let startX, startWidth;

        resizer.addEventListener('mousedown', (e) => {
            startX = e.pageX;
            startWidth = th.offsetWidth;
            document.addEventListener('mousemove', resizeColumn);
            document.addEventListener('mouseup', stopResize);
        });

        function resizeColumn(e) {
            const newWidth = startWidth + (e.pageX - startX);
            if (newWidth > 30) th.style.width = newWidth + 'px';
        }

        function stopResize() {
            document.removeEventListener('mousemove', resizeColumn);
            document.removeEventListener('mouseup', stopResize);
        }
    });
}

// Apply to all resizable tables
document.querySelectorAll('table.resizable').forEach(makeTableResizable);

// Reapply resizable to Metafields table whenever new rows are added
const observer = new MutationObserver((mutationsList, observer) => {
    mutationsList.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeName === 'TR') {
                makeTableResizable(node.closest('table'));
            }
        });
    });
});

document.querySelectorAll('table.resizable tbody').forEach(tbody => {
    observer.observe(tbody, { childList: true });
});
document.getElementById('exportMetafields')?.addEventListener('click', () => exportTableToCSV('metafields-table', 'metafields.csv'));

let isDirty = false;

// Mark as dirty whenever input fields change
document.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => {
        isDirty = true;
    });
});

// Optional: mark dirty when the "Generate" button adds new rows
document.querySelectorAll('.btn-generate').forEach(btn => {
    btn.addEventListener('click', () => {
        isDirty = true;
    });
});

// Mark dirty when tables are modified
const tables = document.querySelectorAll('table tbody');
tables.forEach(table => {
    const observer = new MutationObserver(() => {
        isDirty = true;
    });
    observer.observe(table, { childList: true, subtree: true, characterData: true });
});

// Warn user before leaving or reloading the page
window.addEventListener('beforeunload', function (e) {
    if (isDirty) {
        const message = 'Are you sure you want to leave or reload? All unsaved data will be lost.';
        e.preventDefault();  // For modern browsers
        e.returnValue = message;  // For legacy browsers
        return message;
    }
});

// Make all table cells editable
document.querySelectorAll('table tbody td').forEach(td => {
    td.setAttribute('contenteditable', 'true');
});


// Clear Tables button with confirmation
document.addEventListener('DOMContentLoaded', () => {
  const clearBtn = document.querySelector('.btn-clear');

  function clearTableBody(tableId) {
    const table = document.getElementById(tableId);
    if (!table) return;
    const tbody = table.querySelector('tbody');
    if (tbody) tbody.innerHTML = '';
  }

  clearBtn?.addEventListener('click', (e) => {
    e.preventDefault();

    const confirmed = confirm(
      'Are you sure you want to clear all generated tables?\n\nThis action cannot be undone.'
    );

    if (!confirmed) return;

    // Clear all output tables
    clearTableBody('shopify-table');
    clearTableBody('ebay-table');
    clearTableBody('ebay-tableSSD');
    clearTableBody('metafields-table');

    // Optional feedback
    // alert('Tables cleared successfully.');
  });
});
