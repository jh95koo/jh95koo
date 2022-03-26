#!/bin/bash

project_dir=`pwd`
echo 'project dir ==>' ${project_dir}

cd ../jh95koo.github.io

deploy_dir=`pwd`
echo 'deploy dir  ==>' ${deploy_dir}

# .git 디렉토리 제외하고 전부 삭제
rm -rf `ls -A | grep -v ^.git$`
echo 'deploy directory remove success.'

# 소스 복사
cp -r ${project_dir}/build/* ${deploy_dir}
echo 'source copy success.'
