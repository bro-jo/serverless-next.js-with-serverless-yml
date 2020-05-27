PROJECT_DIR=$PWD

echo ""
echo "\033[36m"This has 4 steps."\033[0m"
echo "\033[36m" 1.Build next.js project."\033[0m"
echo "\033[36m" 2.Deploy infrastructure config using the infra/serverless.yml file"\033[0m"
echo "\033[36m" 3.Deploy infrastructure config using the aws sdk."\033[0m"
echo "\033[36m" 4.Deploy next.js app using serverless-next.js which is serverless component"\033[0m"
echo ""

echo ""
echo "\033[32m"start [step1.Build next.js project.]"\033[0m"
npm run build
if [ $? -eq 0 ];then echo "step1 success"; else echo "\033[31m"step1 fail"\033[0m"; exit 9; fi

echo ""
echo "\033[32m"start [step2.Deploy infrastructure config using the infra/serverless.yml file]"\033[0m"
cd infra
serverless deploy
if [ $? -eq 0 ];then echo "step2 success"; else echo "\033[31m"step2 fail"\033[0m"; exit 9; fi

echo ""
echo "\033[32m"start [step3.Deploy infrastructure config using the aws sdk.]"\033[0m"
babel --no-babelrc --presets es2015 ./deploy.js | node
if [ $? -eq 0 ];then echo "step3 success"; else echo "\033[31m"step3 fail"\033[0m"; exit 9; fi

echo ""
echo "\033[32m"start [step4.Deploy next.js app using serverless-next.js which is serverless component]"\033[0m"
cd $PROJECT_DIR
cross-env APP_ENV=production serverless
if [ $? -eq 0 ];then echo "step4 success"; else echo "\033[31m"step4 fail"\033[0m"; exit 9; fi
