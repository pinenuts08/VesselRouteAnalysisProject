
    let shipping_company = document.getElementById('shipping_company');
    let route = document.getElementById('route_select');
    let table = document.getElementById("courseRouteItemTable");

    shipping_company.addEventListener('click', company);

    function company( ){
        if (this.value == "고려해운 KMTC"){
            route.innerHTML = `<option>Asia India Subcontinent Service (AIS)</option>
            <option>Asia India Subcontinent Service 3 (AIS3)</option>
            <option>Asia Indian Subcontinent Service 4 (AIS4)</option>`;

            document.getElementById('route_select').addEventListener('click',KMTC );
        }
        if ((this.value) == "HMM 현대상선"){
            route.innerHTML = `<option>부산 BUSAN</option>
            <option>울산 ULSAN</option>
            <option>인천 INCHEON</option>`;
            document.getElementById('route_select').addEventListener('click',HMM );
            
        }
       
    }

   

    function HMM (){
        if(this.value=="인천 INCHEON"){
            table.innerHTML=`
                  
                     <tr>
                        <th><div class="no">No.</div></th>
                        <th><div class="loop">Loop</div></th>
                        <th><div class="vessel">Vessel Name/<br>Voyage No.</div></th>
                        <th><div class="arrival">Arrival</div></th>
                        <th><div class="berthing">Berthing</div></th>
                        <th><div class="departure">Departure</div></th>
                        <th><div class="cut-off">Cut-off Time</div></th>
                        <th><div class="current">Current<br>Status</div></th>
                        <th><div class="time">Time Gap<br>(Based on ETD)</div></th>
                        <th><div class="reason">Reason</div></th>
                     </tr>
                  
                  
                     
                     <!-- Row Area Start -->
                     <tr>
                        <td><div class="text">1</div></td>
                        <td><div class="text">KI2</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="HHSU" vslnm="HYUNDAI SUPREME" skdvoyno="0136" loopcd="KI2" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">HYUNDAI SUPREME 0136S (HHSU0136S)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-15 12:04
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-15 13:12
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-16 03:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-15 03:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+5 Days 15 Hours</div></td>
                        <td>
                           <div class="text blue">EDI</div>
                           <div class="hover-tooltip-area">
                              <div class="hover-tooltip">
                                 <div class="tooltip-text">
                                    <div class="text">Schedule Update by EDI</div>
                                 </div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">2</div></td>
                        <td><div class="text">HP2</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="JPBG" vslnm="PACIFIC BEIJING" skdvoyno="2313" loopcd="HP2" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">PACIFIC BEIJING 2313S (JPBG2313S)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-15 18:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-15 19:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-16 05:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-15 09:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+1 Days 17 Hours</div></td>
                        <td>
                           <div class="text blue"></div>
                           
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">3</div></td>
                        <td><div class="text">ICN</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="HTSR" vslnm="SKY RAINBOW" skdvoyno="0024" loopcd="ICN" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">SKY RAINBOW 0024S (HTSR0024S)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-15 23:48
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-16 00:54
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-16 10:05
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-14 22:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+2 Days 19 Hours</div></td>
                        <td>
                           <div class="text blue">EDI</div>
                           <div class="hover-tooltip-area">
                              <div class="hover-tooltip">
                                 <div class="tooltip-text">
                                    <div class="text">Schedule Update by EDI</div>
                                 </div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">4</div></td>
                        <td><div class="text">IHP</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="JHAK" vslnm="HEUNG-A AKITA" skdvoyno="2310" loopcd="IHP" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">HEUNG-A AKITA 2310S (JHAK2310S)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-17 08:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-17 13:05
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-17 23:45
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-16 04:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+2 Days 1 Hours</div></td>
                        <td>
                           <div class="text blue"></div>
                           
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">5</div></td>
                        <td><div class="text">CVT</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="JPHC" vslnm="POS HOCHIMINH" skdvoyno="1027" loopcd="CVT" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">POS HOCHIMINH 1027S (JPHC1027S)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-17 08:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-17 09:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-18 06:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-16 08:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text">+5 Hours</div></td>
                        <td>
                           <div class="text blue"></div>
                           
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">6</div></td>
                        <td><div class="text">KHS</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="JHEC" vslnm="HECAN" skdvoyno="1035" loopcd="KHS" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">HECAN 1035S (JHEC1035S)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-17 22:50
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-18 00:55
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-18 06:20
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-17 16:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+23 Hours</div></td>
                        <td>
                           <div class="text blue"></div>
                           
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">7</div></td>
                        <td><div class="text">PSX</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="HHNT" vslnm="HYUNDAI NEPTUNE" skdvoyno="0028" loopcd="PSX" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">HYUNDAI NEPTUNE 0028W (HHNT0028W)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-18 10:54
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-18 12:18
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-19 18:12
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-17 03:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+7 Days 16 Hours</div></td>
                        <td>
                           <div class="text blue">EDI</div>
                           <div class="hover-tooltip-area">
                              <div class="hover-tooltip">
                                 <div class="tooltip-text">
                                    <div class="text">Schedule Update by EDI</div>
                                 </div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">8</div></td>
                        <td><div class="text">IHP</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="JHHG" vslnm="HEUNG-A HAIPHONG" skdvoyno="0216" loopcd="IHP" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">HEUNG-A HAIPHONG 0216N (JHHG0216N)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-19 05:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-19 07:50
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-19 11:30
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-17 07:30</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+4 Days 14 Hours</div></td>
                        <td>
                           <div class="text blue"></div>
                           
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">9</div></td>
                        <td><div class="text">KPX</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="JSDC" vslnm="STARSHIP DRACO" skdvoyno="2308" loopcd="KPX" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">STARSHIP DRACO 2308S (JSDC2308S)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-19 06:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-19 07:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-19 22:15
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-18 21:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text blue">-8 Hours</div></td>
                        <td>
                           <div class="text blue"></div>
                           
                        </td>
                     </tr>`;
        }
        if(this.value == "부산 BUSAN"){
            table.innerHTML=`
                     <tr>
                        <th><div class="no">No.</div></th>
                        <th><div class="loop">Loop</div></th>
                        <th><div class="vessel">Vessel Name/<br>Voyage No.</div></th>
                        <th><div class="arrival">Arrival</div></th>
                        <th><div class="berthing">Berthing</div></th>
                        <th><div class="departure">Departure</div></th>
                        <th><div class="cut-off">Cut-off Time</div></th>
                        <th><div class="current">Current<br>Status</div></th>
                        <th><div class="time">Time Gap<br>(Based on ETD)</div></th>
                        <th><div class="reason">Reason</div></th>
                     </tr>
                  
                     
                     <!-- Row Area Start -->
                     <tr>
                        <td><div class="text">1</div></td>
                        <td><div class="text">KM2</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="JLVR" vslnm="KILIMANJARO" skdvoyno="0003" loopcd="KM2" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">KILIMANJARO 0003S (JLVR0003S)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-15 00:54
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon long-term"></span>
                                 <div class="text">
                                    <span style="display: none;">(L)</span>
                                    2023-06-15 01:54
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-15 11:51
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-14 22:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text blue">-9 Hours</div></td>
                        <td>
                           <div class="text blue"></div>
                           
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">2</div></td>
                        <td><div class="text">KI2</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="HHDT" vslnm="HYUNDAI DYNASTY" skdvoyno="0118" loopcd="KI2" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">HYUNDAI DYNASTY 0118S (HHDT0118S)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-15 05:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-15 06:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-16 00:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-14 20:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+5 Days 20 Hours</div></td>
                        <td>
                           <div class="text blue">EDI</div>
                           <div class="hover-tooltip-area">
                              <div class="hover-tooltip">
                                 <div class="tooltip-text">
                                    <div class="text">Schedule Update by EDI</div>
                                 </div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">3</div></td>
                        <td><div class="text">KME</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="JSPX" vslnm="SOUTHAMPTON EXPRESS" skdvoyno="0035" loopcd="KME" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">SOUTHAMPTON EXPRESS 0035E (JSPX0035E)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-15 08:51
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-15 09:51
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-15 22:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-14 06:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+8 Days 15 Hours</div></td>
                        <td>
                           <div class="text blue"></div>
                           
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">4</div></td>
                        <td><div class="text">FE4</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="HOSO" vslnm="HMM SOUTHAMPTON" skdvoyno="0010" loopcd="FE4" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">HMM SOUTHAMPTON 0010W (HOSO0010W)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-15 15:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-15 15:47
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-17 19:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-15 03:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+1 Days 5 Hours</div></td>
                        <td>
                           <div class="text blue">OTH</div>
                           <div class="hover-tooltip-area">
                              <div class="hover-tooltip">
                                 <div class="tooltip-text">
                                    <div class="text">Others</div>
                                 </div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">5</div></td>
                        <td><div class="text">A1X</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="HHVC" vslnm="HYUNDAI VANCOUVER" skdvoyno="0285" loopcd="A1X" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">HYUNDAI VANCOUVER 0285S (HHVC0285S)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-15 15:36
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-15 16:48
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-16 23:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-15 06:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+4 Days 2 Hours</div></td>
                        <td>
                           <div class="text blue">OTH</div>
                           <div class="hover-tooltip-area">
                              <div class="hover-tooltip">
                                 <div class="tooltip-text">
                                    <div class="text">Others</div>
                                 </div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">6</div></td>
                        <td><div class="text">ICN</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="HTHW" vslnm="HAIAN WEST" skdvoyno="0032" loopcd="ICN" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">HAIAN WEST 0032W (HTHW0032W)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-16 05:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-16 05:42
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-16 16:10
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-15 02:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+14 Hours</div></td>
                        <td>
                           <div class="text blue">OTH</div>
                           <div class="hover-tooltip-area">
                              <div class="hover-tooltip">
                                 <div class="tooltip-text">
                                    <div class="text">Others</div>
                                 </div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">7</div></td>
                        <td><div class="text">KPX</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="HKSH" vslnm="KMTC SHANGHAI" skdvoyno="2308" loopcd="KPX" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">KMTC SHANGHAI 2308S (HKSH2308S)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-16 05:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-16 06:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-17 08:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-15 20:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text">+7 Hours</div></td>
                        <td>
                           <div class="text blue"></div>
                           
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">8</div></td>
                        <td><div class="text">JKP</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="JNIS" vslnm="NYK ISABEL" skdvoyno="0124" loopcd="JKP" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">NYK ISABEL 0124N (JNIS0124N)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-16 13:06
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-16 14:06
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-17 05:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-15 10:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+2 Days 4 Hours</div></td>
                        <td>
                           <div class="text blue"></div>
                           
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">9</div></td>
                        <td><div class="text">EC6</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="JVSM" vslnm="EVER SMILE" skdvoyno="0112" loopcd="EC6" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">EVER SMILE 0112E (JVSM0112E)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-16 23:05
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-17 00:05
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-17 16:45
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-16 12:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+4 Days 11 Hours</div></td>
                        <td>
                           <div class="text blue"></div>
                           
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">10</div></td>
                        <td><div class="text">KME</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="JJYH" vslnm="AL JMELIYAH" skdvoyno="0024" loopcd="KME" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">AL JMELIYAH 0024E (JJYH0024E)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-17 05:53
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-17 06:53
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-18 04:36
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-15 19:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+11 Days</div></td>
                        <td>
                           <div class="text blue"></div>
                           
                        </td>
                     </tr>
               </table>`;
        }
        if (this.value=="울산 ULSAN"){
            table.innerHTML=`
                  <thead>
                     <tr>
                        <th><div class="no">No.</div></th>
                        <th><div class="loop">Loop</div></th>
                        <th><div class="vessel">Vessel Name/<br>Voyage No.</div></th>
                        <th><div class="arrival">Arrival</div></th>
                        <th><div class="berthing">Berthing</div></th>
                        <th><div class="departure">Departure</div></th>
                        <th><div class="cut-off">Cut-off Time</div></th>
                        <th><div class="current">Current<br>Status</div></th>
                        <th><div class="time">Time Gap<br>(Based on ETD)</div></th>
                        <th><div class="reason">Reason</div></th>
                     </tr>
                  </thead>
                  <tbody>
                     
                     <!-- Row Area Start -->
                     <tr>
                        <td><div class="text">1</div></td>
                        <td><div class="text">KI1</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="JBTW" vslnm="BALTIC WEST" skdvoyno="2306" loopcd="KI1" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">BALTIC WEST 2306S (JBTW2306S)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-16 15:50
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-16 16:50
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-17 11:15
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-15 13:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text">+2 Hours</div></td>
                        <td>
                           <div class="text blue"></div>
                           
                        </td>
                     </tr>
                     <tr>
                        <td><div class="text">2</div></td>
                        <td><div class="text">HP2</div></td>
                        <td>
                           <div class="text left">
                              <a href="#" class="click" vslcd="JPBG" vslnm="PACIFIC BEIJING" skdvoyno="2313" loopcd="HP2" onclick="gotoByVslNm(this.getAttribute('vslCd'), this.getAttribute('vslNm'), this.getAttribute('skdVoyNo'), this.getAttribute('loopCd'))">PACIFIC BEIJING 2313S (JPBG2313S)</a>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div>
                                    <span style="display: none;">(C)</span>
                                    2023-06-17 12:00
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon coastal"></span>
                                 <div class="text">
                                    <span style="display: none;">(C)</span>
                                    2023-06-17 12:55
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <div class="text">
                              <div class="text-info-box">
                                 <span class="guide-icon actual"></span>
                                 <div class="text">
                                    <span style="display: none;">(A)</span>
                                    2023-06-17 16:05
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td><div class="text">2023-06-16 06:00</div></td>
                        <td><div class="text">DEPARTED</div></td>
                        <td><div class="text red">+1 Days 14 Hours</div></td>
                        <td>
                           <div class="text blue"></div>
                           
                        </td>
                     </tr>
                     <!-- Row Area End -->
                  </tbody>`;
        }
    
    }

    function KMTC() {
        if (this.value == "Asia India Subcontinent Service (AIS)") {
            table.innerHTML = `
            <tr>
                <th class="rotation">ROTATION</th>
                <th class="terminal">TERMINAL</th>
                <th class="eta">ETA</th>
                <th class="etd">ETD</th>
                <th class="tdays">T/DAYS</th>
            </tr>

            <tr>
                <td class="portName">QINGDAO</td>
                <td>Qingdao Qianwan Container Terminal</td>
                <td>THU</td>
                <td>FRI</td>
                <td class="td_last">0</td>
            </tr>

            <tr>
                <td class="portName">KWANGYANG</td>
                <td>Hutchison Port Kwangyang</td>
                <td>SUN</td>
                <td>SUN</td>
                <td class="td_last">3</td>
            </tr>

            <tr>
                <td class="portName">BUSAN NEW</td>
                <td>Hanjin New Port</td>
                <td>SUN</td>
                <td>MON</td>
                <td class="td_last">1</td>
            </tr>

            <tr>
                <td class="portName">NINGBO</td>
                <td>Meishan Island International Container Terminal</td>
                <td>WED</td>
                <td>WED</td>
                <td class="td_last">2</td>
            </tr>

            <tr>
                <td class="portName">SHEKOU</td>
                <td>Chiwan Container Terminal</td>
                <td>FRI</td>
                <td>SAT</td>
                <td class="td_last">3</td>
            </tr>

            <tr>
                <td class="portName">SINGAPORE</td>
                <td>Port of Singapore Authority</td>
                <td>WED</td>
                <td>THU</td>
                <td class="td_last">4</td>
            </tr>

            <tr>
                <td class="portName">PORT KLANG WEST</td>
                <td>Westport Container Terminal</td>
                <td>THU</td>
                <td>FRI</td>
                <td class="td_last">1</td>
            </tr>

            <tr>
                <td class="portName">NHAVA SHEVA</td>
                <td>Jawaharlal Nehru Port</td>
                <td>FRI</td>
                <td>SAT</td>
                <td class="td_last">8</td>
            </tr>

            <tr>
                <td class="portName">MUNDRA</td>
                <td>ADANI MUNDRA CONTAINER TERMINAL (CT2)</td>
                <td>SUN</td>
                <td>MON</td>
                <td class="td_last">2</td>
            </tr>

            <tr>
                <td class="portName">KARACHI</td>
                <td>PAKISTAN INT'L CONTAINER TERMINAL</td>
                <td>MON</td>
                <td>WED</td>
                <td class="td_last">2</td>
            </tr>

            <tr>
                <td class="portName">PORT KLANG WEST</td>
                <td>Westport Container Terminal</td>
                <td>WED</td>
                <td>THU</td>
                <td class="td_last">8</td>
            </tr>

            <tr>
                <td class="portName">HONG KONG </td>
                <td>Hongkong International Terminal</td>
                <td>MON</td>
                <td>MON</td>
                <td class="td_last">5</td>
            </tr>

            <tr>
                <td class="portName">QINGDAO</td>
                <td>Qingdao Qianwan Container Terminal</td>
                <td>THU</td>
                <td>FRI</td>
                <td class="td_last">3</td>
            </tr>`
        }
        if (this.value == "Asia India Subcontinent Service 3 (AIS3)") {

            table.innerHTML = `<tr id="table_head">
	                <th class="rotation">ROTATION</th>
	                <th class="terminal">TERMINAL</th>
	                <th class="eta">ETA</th>
	                <th class="etd">ETD</th>
	                <th class="tdays">T/DAYS</th>
               </tr>
                  
                     <tr >
                        
                          <td class="portName">QINGDAO</td>
                          <td>Qindao New Qianwan Container Terminal</td>
                          <td>FRI</td>
                          <td>SAT</td>
                          <td class="td_last">0</td>
                          <input type="hidden" class="portLat" value="36.010393">
                          <input type="hidden" class="portLng" value="120.201808">
                      </tr>
                     
                     <tr >
                        <input type="hidden" name="portCd" id="portCd" value="SHA">
                          <td class="portName">SHANGHAI</td>
                          <td>WAIGAOQIAO II &amp; III (SIPGZCT)</td>
                          <td>SUN</td>
                          <td>MON</td>
                          <td class="td_last">2</td>
                          <input type="hidden" class="portLat" value="31.327108">
                          <input type="hidden" class="portLng" value="121.650396">
                      </tr>
                     
                     <tr >
                        <input type="hidden" name="portCd" id="portCd" value="NBO">
                          <td class="portName">NINGBO</td>
                          <td>Meishan Island International Container Terminal</td>
                          <td>TUE</td>
                          <td>WED</td>
                          <td class="td_last">2</td>
                          <input type="hidden" class="portLat" value="29.938936">
                          <input type="hidden" class="portLng" value="121.836811">
                      </tr>
                     
                     <tr>
                        <input type="hidden" name="portCd" id="portCd" value="DCB">
                          <td class="portName">Da Chan Bay</td>
                          <td>Dachan Bay Modern Port Terminal</td>
                          <td>FRI</td>
                          <td>FRI</td>
                          <td class="td_last">3</td>
                          <input type="hidden" class="portLat" value="22.541963">
                          <input type="hidden" class="portLng" value="113.862333">
                      </tr>
                     
                     <tr>
                        <input type="hidden" name="portCd" id="portCd" value="PKW">
                          <td class="portName">PORT KLANG WEST</td>
                          <td>Westport Container Terminal</td>
                          <td>WED</td>
                          <td>THU</td>
                          <td class="td_last">5</td>
                          <input type="hidden" class="portLat" value="2.9480205">
                          <input type="hidden" class="portLng" value="101.3079196">
                      </tr>
                     
                     <tr>
                        <input type="hidden" name="portCd" id="portCd" value="NSA">
                          <td class="portName">NHAVA SHEVA</td>
                          <td>GATEWAY TERMINAL INDIA</td>
                          <td>WED</td>
                          <td>THU</td>
                          <td class="td_last">7</td>
                          <input type="hidden" class="portLat" value="18.9499361">
                          <input type="hidden" class="portLng" value="72.9511875">
                      </tr>
                     
                     <tr >
                        <input type="hidden" name="portCd" id="portCd" value="MUN">
                          <td class="portName">MUNDRA</td>
                          <td>ADANI MUNDRA CONTAINER TERMINAL (CT2)</td>
                          <td>FRI</td>
                          <td>SAT</td>
                          <td class="td_last">2</td>
                          <input type="hidden" class="portLat" value="22.8395202">
                          <input type="hidden" class="portLng" value="69.7213266">
                      </tr>
                     
                     <tr>
                        <input type="hidden" name="portCd" id="portCd" value="HZR">
                          <td class="portName">HAZIRA</td>
                          <td>ADANI HAZIRA PORT PVT. LTD. </td>
                          <td>SUN</td>
                          <td>MON</td>
                          <td class="td_last">2</td>
                          <input type="hidden" class="portLat" value="21.1754875">
                          <input type="hidden" class="portLng" value="72.6773292">
                      </tr>
                     
                     <tr >
                        <input type="hidden" name="portCd" id="portCd" value="CMB">
                          <td class="portName">COLOMBO</td>
                          <td>SOUTH ASIA GATEWAY  TERMINAL</td>
                          <td>WED</td>
                          <td>THU</td>
                          <td class="td_last">4</td>
                          <input type="hidden" class="portLat" value="6.943355">
                          <input type="hidden" class="portLng" value="79.841193">
                      </tr>
                     
                     <tr >
                        <input type="hidden" name="portCd" id="portCd" value="PKW">
                          <td class="portName">PORT KLANG WEST</td>
                          <td>Westport Container Terminal</td>
                          <td>MON</td>
                          <td>MON</td>
                          <td class="td_last">4</td>
                          <input type="hidden" class="portLat" value="2.9480205">
                          <input type="hidden" class="portLng" value="101.3079196">
                      </tr>
                     
                     <tr >
                        <input type="hidden" name="portCd" id="portCd" value="SIN">
                          <td class="portName">SINGAPORE</td>
                          <td>Port of Singapore Authority</td>
                          <td>TUE</td>
                          <td>WED</td>
                          <td class="td_last">1</td>
                          <input type="hidden" class="portLat" value="1.2831447">
                          <input type="hidden" class="portLng" value="103.7738943">
                      </tr>
                     
                     <tr>
                        <input type="hidden" name="portCd" id="portCd" value="HPH">
                          <td class="portName">HAIPHONG</td>
                          <td>HICT(Lach Huyen) Terminal </td>
                          <td>SAT</td>
                          <td>MON</td>
                          <td class="td_last">4</td>
                          <input type="hidden" class="portLat" value="20.8406366">
                          <input type="hidden" class="portLng" value="106.7686236">
                      </tr>
                     
                     <tr>
                        <input type="hidden" name="portCd" id="portCd" value="TAO">
                          <td class="portName">QINGDAO</td>
                          <td>Qindao New Qianwan Container Terminal</td>
                          <td>FRI</td>
                          <td>SAT</td>
                          <td class="td_last">6</td>
                          <input type="hidden" class="portLat" value="36.010393">
                          <input type="hidden" class="portLng" value="120.201808">
                      </tr>`;


        }
        if (this.value == "Asia Indian Subcontinent Service 4 (AIS4)") {
            table.innerHTML =
                `<tr id="table_head">
	                <th class="rotation">ROTATION</th>
	                <th class="terminal">TERMINAL</th>
	                <th class="eta">ETA</th>
	                <th class="etd">ETD</th>
	                <th class="tdays">T/DAYS</th>
                </tr>
   
    
               <tr>
                  <input type="hidden" name="portCd" id="portCd" value="SHA">
                  <td class="portName">SHANGHAI</td>
                  <td>WAIGAOQIAO V (SMCT)</td>
                  <td>TUE</td>
                  <td>WED</td>
                  <td class="td_last">0</td>
                  <input type="hidden" class="portLat" value="31.327108">
                  <input type="hidden" class="portLng" value="121.650396">
               </tr>
                     
               <tr>
                  <input type="hidden" name="portCd" id="portCd" value="NBO">
                  <td class="portName">NINGBO</td>
                  <td>NINGBO BEILUN THIRD INTERNATIONAL CONTAINER TERMINAL</td>
                  <td>THU</td>
                  <td>THU</td>
                  <td class="td_last">2</td>
                  <input type="hidden" class="portLat" value="29.938936">
                  <input type="hidden" class="portLng" value="121.836811">
                  </tr>
                     
               <tr>
                   <input type="hidden" name="portCd" id="portCd" value="SHK">
                  <td class="portName">SHEKOU</td>
                  <td>Mawan Container Terminal</td>
                  <td>SAT</td>
                  <td>SUN</td>
                  <td class="td_last">3</td>
                  <input type="hidden" class="portLat" value="22.471749">
                  <input type="hidden" class="portLng" value="113.890692">
               </tr>
                     
               <tr>
                  <input type="hidden" name="portCd" id="portCd" value="SIN">
                   <td class="portName">SINGAPORE</td>
                  <td>Port of Singapore Authority</td>
                  <td>FRI</td>
                  <td>SAT</td>
                  <td class="td_last">5</td>
                  <input type="hidden" class="portLat" value="1.2831447">
                  <input type="hidden" class="portLng" value="103.7738943">
               </tr>
                     
               <tr>
                  <input type="hidden" name="portCd" id="portCd" value="PKG">
                  <td class="portName">PORT KLANG NORTH</td>
                  <td>NORTHPORT MALAYSIA SDN BHD</td>
                  <td>SAT</td>
                  <td>MON</td>
                  <td class="td_last">1</td>
                  <input type="hidden" class="portLat" value="3.022408">
                  <input type="hidden" class="portLng" value="101.359269">
               </tr>
                     
               <tr>
                  <input type="hidden" name="portCd" id="portCd" value="NSA">
                  <td class="portName">NHAVA SHEVA</td>
                  <td>GATEWAY TERMINAL INDIA</td>
                  <td>SAT</td>
                  <td>SUN</td>
                  <td class="td_last">7</td>
                  <input type="hidden" class="portLat" value="18.9499361">
                  <input type="hidden" class="portLng" value="72.9511875">
               </tr>
                     
               <tr>
                  <input type="hidden" name="portCd" id="portCd" value="MUN">
                  <td class="portName">MUNDRA</td>
                  <td>ADANI MUNDRA CONTAINER TERMINAL (CT2)</td>
                  <td>MON</td>
                  <td>TUE</td>
                  <td class="td_last">2</td>
                  <input type="hidden" class="portLat" value="22.8395202">
                  <input type="hidden" class="portLng" value="69.7213266">
               </tr>
                     
               <tr>
                  <input type="hidden" name="portCd" id="portCd" value="KHI">
                  <td class="portName">KARACHI</td>
                  <td>PAKISTAN INT'L CONTAINER TERMINAL</td>
                  <td>WED</td>
                  <td>FRI</td>
                  <td class="td_last">3</td>
                  <input type="hidden" class="portLat" value="24.8614622">
                  <input type="hidden" class="portLng" value="67.0099387999999">
               </tr>
                     
               <tr>
                  <input type="hidden" name="portCd" id="portCd" value="CMB">
                  <td class="portName">COLOMBO</td>
                  <td>SOUTH ASIA GATEWAY  TERMINAL</td>
                  <td>TUE</td>
                  <td>WED</td>
                  <td class="td_last">6</td>
                  <input type="hidden" class="portLat" value="6.943355">
                  <input type="hidden" class="portLng" value="79.841193">
               </tr>
                     
               <tr>
                  <input type="hidden" name="portCd" id="portCd" value="PKG">
                  <td class="portName">PORT KLANG NORTH</td>
                  <td>NORTHPORT MALAYSIA SDN BHD</td>
                  <td>SUN</td>
                  <td>MON</td>
                  <td class="td_last">4</td>
                  <input type="hidden" class="portLat" value="3.022408">
                  <input type="hidden" class="portLng" value="101.359269">
               </tr>
                     
               <tr>
                  <input type="hidden" name="portCd" id="portCd" value="HKG">
                  <td class="portName">HONG KONG           </td>
                  <td>Hongkong International Terminal</td>
                  <td>SAT</td>
                  <td>SAT</td>
                  <td class="td_last">6</td>
                  <input type="hidden" class="portLat" value="22.3413627">
                  <input type="hidden" class="portLng" value="114.1275903">
               </tr>
                     
               <tr>
                  <input type="hidden" name="portCd" id="portCd" value="SHA">
                  <td class="portName">SHANGHAI</td>
                  <td>WAIGAOQIAO V (SMCT)</td>
                  <td>TUE</td>
                  <td>WED</td>
                  <td class="td_last">3</td>
                  <input type="hidden" class="portLat" value="31.327108">
                  <input type="hidden" class="portLng" value="121.650396">
               </tr>`;
        }
    }