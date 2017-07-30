FROM node:7.10.0

ENV APP_NAME "seven-chip"
ENV APP_USER "sibin"
ENV HOME /home/$APP_USER
ENV PROJECT_PATH "/media/sibin/F_WORK/Javascript"
ENV APP_DIR  "/media/sibin/F_WORK/Javascript/seven-chip"

RUN useradd --user-group --create-home --shell /bin/false $APP_USER 
RUN npm install --global ember-cli 

RUN npm install && npm cache clean 


USER $APP_USER 
WORKDIR $PROJECT_PATH.'/docker'
ADD . $WORKDIR

EXPOSE 4200

CMD ["ember","serve","--host=0.0.0.0"]
