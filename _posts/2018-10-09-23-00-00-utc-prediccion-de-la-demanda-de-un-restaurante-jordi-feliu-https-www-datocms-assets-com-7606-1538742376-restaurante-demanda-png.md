---
layout: post
title: Predicción de la demanda de un restaurante | Jordi Feliu | https://www.datocms-assets.com/7606/1538742376-restaurante-demanda.png
date: 2018-10-09 23:00:00 UTC
categories: article Análisis Horeca/predicción/demanda
---

# ![](https://www.datocms-assets.com/7606/1538742376-restaurante-demanda.png)

# Predicción de la demanda de un restaurante

#### por Jordi Feliu
##### 10 OCT 2018

## Contexto

Empresa del sector de la hostelería tiene varios negocios de hoteles, restaurantes y cafeterías. Su clientela principal son turistas europeos que vienen a disfrutar del Mediterráneo durante los meses de primavera y verano. Los negocios gozan de buenos emplazamientos y la imagen y el servicio están cuidados. No obstante, **creen que podrían mejorar el rendimiento a partir del análisis de los datos**.

## Problema
Las dificultades para predecir la demanda para los restaurantes y hoteles **impactan directamente en la cuenta de resultados** de la compañía. Los costes de personal (camareros, cocineros, asistentes…), compras de suministros, mermas… pueden dispararse en el caso que la predicción sea superior a la demanda. O si la predicción está por debajo, el servicio y la satisfacción de los clientes pueden verse comprometida. 
Por otro lado, la gestión de precios, la gestión de clientes y la gestión de campañas de comunicación…también podría mejorar con una acertada predicción dela demanda.

## Solución
El objetivo del proyecto es **mejorar la Predicción de la Demanda** a partir de la extracción de conocimiento de los datos internos/externos disponibles.

## ![](https://www.datocms-assets.com/7606/1538742472-data-journey.png)

### Tareas relacionadas con DATOS

* Identificación solamente datos relacionados el objetivo del proyecto
* Obtención de los datos 
* Preparación de los datos
* Validación y limpieza de los datos
* Almacenaje de los datos en base de datos analítica

#### Datos Internos
* Clientes (por tipología, segmentación, perfil…)
* Producto (por negocio, tipología de productos/servicios, disponibilidad…)
* Precio (tarifas, paquetes…)
* Comunicaciones (por canal, campañas realizadas, plataformas tipo tenedor, booking…)
* Recursos (personal, directos, indirectos…)
* Transacciones (Reservas, Ventas por centro y día, Ocupación)
* Otros (dispositivos conectados

#### Datos Externos

* Mercado (ocupación hotelera INE, vuelos…)
* Competencia (identificación, facturación, redes sociales, área influencia, producto…)
* Clima (histórico de viento, lluvias, temperaturas…)
* Festividades y Eventos (Nacionales y Locales)


### Tareas relacionadas con ANÁLISIS

#### Análisis exploratorio

Disponibilidad y fiabilidad de los datos: Años disponible, periodicidad, valores nulos o no válidos, identificación de outliers, etc			

* Estadísticas de resumen de las variables por tipo de datos			
* Distribuciones de variables por tipo de datos			
* Correlaciones y asociaciones importantes entre las variables.
* Identificación de las variables relevantes para la estimación de la demanda 

#### Preparación de los datos				
* Limpieza de datos: Eliminación de outliers
* Transformación de los datos y creación de nuevas variables: Normalización, categorización, índices, variables indicadoras, etc.			
* Selección de la muestra: Train (75%) y Test (25%)			

#### Análisis de tendencia, ciclo y estacionalidad

* Comportamiento de las series históricas			
* Identificación de los componentes: Estacional, tendencia, elementos cíclicos y error.

#### Modelización y validación del modelo

*Modelos de series temporales*
* Utilización de datos relacionados de periodos anteriores		
* Componentes: Tendencia, estacionalidad y ciclos		
* Técnicas: Medias móviles, Alisado exponencial , Modelos ARIMA (Autoregressive Integrated Moving Average) estacionales		

*Modelos Econométricos*		
* Modelo de regresión que contempla variables autorregresivas endógenas, así como exógenas.	


### Tareas relacionadas con VISUALIZACIÓN

Herramienta Qlik Sense

#### Dashboard Descriptivo

Se visualiza el histórico de datos internos/externos y las desviaciones respecto a los objetivos/predicciones

#### Dashboard Predictivo de la Demanda

A partir de información introducida y el algoritmo de Predicción de la Demanda obtenido en la fase de Análisis, el Dashboard visualiza el escenario de la Demanda más probable.


## Resultados

* Reducción de los costes de personal hasta el 30%, sin perjudicar al servicio y satisfacción del cliente. Mejora en la negociación y gestión del departamento de Compras.
* Mejora en el Revenue Management de los hoteles y restaurantes.
* Implementación de un proyecto CRM con los clientes y potenciales