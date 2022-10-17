import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import PropType from "prop-types";

const Home =()=>{
return(
	<>
		<Navbar
			//Pasar parametros al Navbar de izquierda a derecha
			label1="Bootstrap"
			label2="Home"
			label3="About"
			label4="Services"
			label5="Contact"
		/>

		<div className="container">

		<Jumbotron
			//Pasar parametros al componente

			tittle="Interactuando con REACT"
			text="React te ayuda a crear interfaces de usuario interactivas de forma sencilla. 
			Diseña vistas simples para cada estado en tu aplicación,
			y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien."
			btnLink="#"
			btnLabel="Pincha aqui"

		/>

		<Card
			//Pasar parametros al componente

			tittle="Imagen"
			cardText="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con
					el contenido del texto de un sitio mientras que mira su diseño"
			btnLink="https://www.google.com/search?client=firefox-b-d&q=gatos"
			btnLabel="Ir a buscar Gatos"
			imgUrl= "https://cdn.onemars.net/sites/nutro_es_NkyIN_B9cV/image/20_1615982101979.jpeg"

		/>

		</div>
		
		<Footer
			//Pasar parametros para el componente

			text="Copyright © your Website 2023"
		/>
	</>
	
)
}

 const Navbar=(props) =>{
	return(
			//Navbar copiada de la pagina de bootstrap y adaptada
			<nav  className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div  className="container-fluid">
				<a  className="navbar-brand" href="#">{props.label1}</a>
				<button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span  className="navbar-toggler-icon"></span>
				</button>
				<div  className="collapse navbar-collapse ms-auto" id="navbarNav" >
				<ul  className="navbar-nav ms-auto">
					<li  className="nav-item">
					<a  className="nav-link active" aria-current="page" href="#" >{props.label2}</a>
					</li>
					<li  className="nav-item">
					<a  className="nav-link" href="#">{props.label3}</a>
					</li>
					<li  className="nav-item">
					<a  className="nav-link" href="#">{props.label4}</a>
					</li>
					<li  className="nav-item">
					<a  className="nav-link" href="#">{props.label5}</a>
					</li>
				</ul>
				</div>
			</div>
			</nav>
);
};

Navbar.propTypes={
	//parametros props de Navbar con el tipo de dato que recibe
	label1: PropType.string,
	label2: PropType.string,
	label3: PropType.string,
	label4: PropType.string,
	label5: PropType.string,
}

const Footer=(props)=>{
	return(
		//footer copiado de una web y adaptado
		<footer id="mdb-footer" className="mt-4 bg-dark">
			<div className="container py-4">
				<div className="text-center text-light">
				<p className="mt-5">
				 {props.text}
				</p>
				</div>   
			</div>
		</footer>
	);
};

Footer.propTypes={
	//parametros props de Footer con el tipo de dato que recibe
	text: PropType.string,
}

 const Jumbotron=(props)=>{
	return(
		//card copiada de bootstrap y adaptado
		<>
		<div className="card-body bg-secondary bg-opacity-10 pb-5 px-5">
			<p className="card-text">
			<h1>{props.tittle}</h1>
			<p>{props.text}</p>
			</p>
			<a href={props.btnLink} target="_blank" className="btn btn-primary">
			{props.btnLabel}
			</a>
		</div>
		</>
	);
};

Jumbotron.propTypes={
	//parametros de Jumbotron con el tipo de dato que recibe
	tittle: PropType.string,
	text:PropType.string,
	btnLink: PropType.string,
	btnLabel: PropType.string,
}


const Card = (props)=>{
	//agrego array de objetos para un futuro agregar mas imagenes y hacer una funcion map
	let imagenes =[{url: props.imgUrl , tittle :props.tittle , text : props.cardText, btnLink:props.btnLink, btnLabel:props.btnLabel}]
	const repetir= ()=> {
		//funcion para repetir la carta, se le da un width para q tenga una separacion entre las cartas
		return(
		<>
		<div  className="card col-3 text-center ms-auto" style={{width: '23%'}}>
			<img src={imagenes[0].url} className="card-img-top"/>
			<div  className="card-body">
				<h3  className="card-title fw-bold">{imagenes[0].tittle}</h3>
				<p  className="card-text">{imagenes[0].text}</p>
			</div>
			<div className="bg-light">
				<a href={imagenes[0].btnLink} target="_blank" className="btn btn-primary">{imagenes[0].btnLabel}</a>
			</div>
		</div>
		</>
		);
	};
		return(
		//llamando a la funcion repetir dentro de una div "row" para que todo este en una fila
		<>
		<div className="row mt-5">
			{repetir()}
			{repetir()}
			{repetir()}
			{repetir()}
		</div>
		</>
		);
	
	
};

Card.propTypes ={
	//patemetros de Card con el tipo de dato que recibe
	tittle: PropType.string,
	cardText:PropType.string,
	btnLink: PropType.string,
	btnLabel: PropType.string,
	imgUrl: PropType.string,
}

export default Home
