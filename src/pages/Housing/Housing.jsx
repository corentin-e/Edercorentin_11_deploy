import "./housing.css";
import { Header, Footer, Tag, DropdownInfo, DropdownList, Rating, Carrousel} from "../../components";
import data from "../../data.json"
import { React, useState} from "react";
import {Navigate, useParams} from 'react-router-dom';

const Housing = () =>  {
    const { id } = useParams();
    const housing = data.housings.find(housing => housing.id === id)


    const [infoOpen, setInfoOpen] = useState(false)
    const [listOpen, setListOpen] = useState(false)

    const toggleInfo = () => {
        setInfoOpen(!infoOpen)
        if (listOpen === true) {
            setListOpen(false)
        }
    }


    const toggleList = () => {
        setListOpen(!listOpen)
        if (infoOpen === true) {
            setInfoOpen(false)
        }
    }


    if(!housing) {
        return <Navigate  to='/error' />
    }


  return (
    <div className="housingPage_page_position">
      <Header />
      <Carrousel pictures={housing.pictures}/>
      <div className="housingPage_items_position">
        <div className="housingPage_profile_items_position">
          <div className="housingPage_housing_details">
            <div className="housingPage_title_housing">{housing.title}</div>
            <div className="housingPage_location_housing">{housing.location}</div>
            <div className="housingPage_tags_items_position">
              {housing.tags.map(tag =>(
                <Tag key={tag} tagName={tag}/>
              ))
              }
            </div>
          </div>
          <div className="housingPage_housing_host_details">
              <div className="housingPage_host">
                  <label className="housingPage_name_host">{housing.host.name}</label>
                  <div className="housingPage_image_host_border">
                    <img src={housing.host.picture} alt="" className="housingPage_image_host_position"/>
                  </div>
              </div>
              <Rating rating={housing.rating}/>
          </div>
        </div>
        <div className="housingPage_housing_infos">
          <div className="housingPage_housing_description">
            <DropdownInfo
                dropdownTitle="Description"
                dropdownText={housing.description}
                toggle={toggleInfo}
                open={infoOpen}
            />
          </div>
          <div className="housingPage_housing_description">
            <DropdownList
                dropdownTitleList="Équipements"
                housingId={housing}
                toggle={toggleList}
                open={listOpen}
            />
          </div>
        </div>
      </div>
      <div className="housingPage_footer_position"/>
        <Footer/>
      <div/>
    </div>
  );
}

export default Housing;
