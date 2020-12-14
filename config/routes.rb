Rails.application.routes.draw do
  root to: 'pages#root'
  get 'object', to: 'pages#object'
  get 'space', to: 'pages#space'
end
