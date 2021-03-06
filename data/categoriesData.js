import Category from "../models/category";
import CatContent from "../models/catContent";
import Colors from "../constants/Colors";
import {Image} from "react-native";
import React from "react";

//import SubCategory from '../models/catContent';

//color codes taken from https://www.w3schools.com/cssref/css_colors.asp

const [medicalIcon, surgicalIcon, traumaIcon, toxicologyIcon, foreignIngestionIcon, emergentRashesIcon] =[
  <Image source={require('../assets/icons/medical-icon-80.png')}/>,
  <Image source={require('../assets/icons/surgical-icon-80.png')}/>,
  <Image source={require('../assets/icons/trauma-icon-80.png')}/>,
  <Image source={require('../assets/icons/toxicology-icon-80.png')}/>,
  <Image source={require('../assets/icons/foreign-ingestion-icon-80.png')}/>,
  <Image source={require('../assets/icons/emergent-rashes-icon-64.png')}/>
]


export const CATEGORIES = [
  new Category("c1", "Medical", medicalIcon, Colors.medical),
  new Category("c2", "Surgical", surgicalIcon ,Colors.surgical),
  new Category("c3", "Trauma", traumaIcon,Colors.trauma),
  new Category("c4", "Toxicology", toxicologyIcon, Colors.toxicology),
  new Category("c5", "Foreign Ingestion", foreignIngestionIcon, Colors.foreign),
  //new Category("c6", "Emergent Rashes", emergentRashesIcon, Colors.emergent),
  // new Category("c7", "[Category 7]", Colors.cat7),
  // new Category("c8", "[Category 8]", Colors.cat8),
];

export const CATCONTENT = [
  //Medical
  new CatContent(
    "c1-1",
    "Status asthmaticus",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-2",
    "Status epilepticus",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-3",
    "Sepsis",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-4",
    "Sickle cell and fever",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-5",
    "Pneumonia",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image",
    "../assets/icons/pneumonia-icon-100.png",
  ),
  new CatContent(
    "c1-6",
    "Pyelonephritis",

    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-7",
    "Fever in immunosuppressed",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-8",
    "Fever < or = 28 days",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-9",
    "Fever <  or = 60 days",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-10",
    "Orbital cellultis",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-11",
    "Pelvic Inflammatory disease",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-12",
    "Ectopic pregnancy",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-13",
    "Meningitis ",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-14",
    "Altered mental status",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-15",
    "Retropharyngeal abscess",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-16",
    "Peritonsillar abscess",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-17",
    "Hypertensive crisis",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-18",
    "Thyroid storm",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-19",
    "DKA",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-20",
    "Anaphylaxis",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-21",
    "Bacterial tracheitis",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-22",
    "Croup",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c1-23",
    "BRUE",
    Colors.medical,
    "c1",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),

  //Surgical
  new CatContent(
    "c2-1",
    "Appendicitis",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c2-2",
    "Testicular Torsion",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c2-3",
    "Ovarian Torsion",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c2-4",
    "Pyloric stenosis",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c2-5",
    "Midgut volvulus",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c2-6",
    "Intracranial bleed",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c2-7",
    "Globe rupture",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c2-8",
    "Hyphema",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c2-9",
    "Nasal septal hematoma",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c2-10",
    "Surgical airway",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c2-11",
    "Necrotizing enterocolitis",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c2-12",
    "Peritonitis",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c2-13",
    "Perianal abscess",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c2-14",
    "Acute cholecystitis",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c2-15",
    "Intussusception",
    Colors.surgical,
    "c2",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),

  //Trauma
  new CatContent(
    "c3-1",
    "SPINE ",
    Colors.trauma,
    "c3",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c3-2",
    "HEAD  ",
    Colors.trauma,
    "c3",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c3-3",
    "MVC ",
    Colors.trauma,
    "c3",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c3-4",
    "PEDESTRIAN HBC ",
    Colors.trauma,
    "c3",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c3-5",
    "BLUNT THORACIC ",
    Colors.trauma,
    "c3",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c3-6",
    "BLUNT ABDOMINAL ",
    Colors.trauma,
    "c3",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c3-7",
    "GSW EXTREMITY ",
    Colors.trauma,
    "c3",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c3-8",
    "TENSION PNEUMOTHORAX ",
    Colors.trauma,
    "c3",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c3-9",
    "CARDIAC TAMPONADE ",
    Colors.trauma,
    "c3",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),

  //Toxicology
  new CatContent(
    "c4-1",
    "ACETAMINOPHEN",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-2",
    "IRON",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-3",
    "SALICYLATE",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-4",
    "TRICYCLIC ANTIDEPRESSANTS",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-5",
    "CLONIDINE",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-6",
    "ORGANOPHOSPHATE",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-7",
    "CARBON MONOXIDE",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-8",
    "CYANIDE",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-9",
    "OPIOIDS",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-10",
    "BENZODIAZEPINES",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-11",
    "ECSTASY",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-12",
    "BATH SALTS",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-13",
    "COCAINE",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-14",
    "LSD",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-15",
    "MARIJUANA",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
  new CatContent(
    "c4-16",
    "ALCOHOLS",
    Colors.toxicology,
    "c4",
    "evaluation",
    "signs",
    "management",
    "medications",
    "references",
    "image"
  ),
];
