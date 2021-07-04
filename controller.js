angular.module('calculateMarks', ['ngMaterial', 'ngMessages'])
    .controller('calculateMarkController', ($scope) => {

        var markCtrl = this;


        // 10th marks
        $scope.sslcLanguage1 = 0;
        $scope.sslcLanguage2 = 0;
        $scope.sslcMaths = 0;
        $scope.sslcScience = 0;
        $scope.sslcSocialScience = 0;

        // +1 marks
        $scope.plus1Subject1 = 0;
        $scope.plus1Subject2 = 0;
        $scope.plus1Subject3 = 0;
        $scope.plus1Subject4 = 0;
        $scope.plus1Subject5 = 0;
        $scope.plus1Subject6 = 0;

        // +2 marks
        $scope.plus2Subject1 = 30;
        $scope.plus2Subject2 = 30;
        $scope.plus2Subject3 = 30;
        $scope.plus2Subject4 = 30;
        $scope.plus2Subject5 = 30;
        $scope.plus2Subject6 = 30;

        $scope.totalMarks = 0;
        const sortMarks = (markList) => {
            return markList.sort(function(a, b) {
                return b - a;
            });
        };
        $scope.calculateMyMark = () => {
            if (!$scope.sslcLanguage1 || !$scope.sslcLanguage2 || !$scope.sslcMaths || !$scope.sslcScience || !$scope.sslcSocialScience) {
                alert('Please input all subject\'s 10th Standard marks');
                return;
            } else if (Number($scope.sslcLanguage1) > 100 || Number($scope.sslcLanguage2) > 100 || Number($scope.sslcMaths) > 100 || Number($scope.sslcScience) > 100 || Number($scope.sslcSocialScience) > 100) {
                alert('Please make sure your mark doesn\'t exceed 100');
                return;
            }
            if (!$scope.plus1Subject1 || !$scope.plus1Subject2 || !$scope.plus1Subject3 || !$scope.plus1Subject4 || !$scope.plus1Subject5 || !$scope.plus1Subject6) {
                alert('Please input all subject\'s 11th Standard marks');
                return;
            } else if (Number($scope.plus1Subject1) > 100 || Number($scope.plus1Subject2) > 100 || Number($scope.plus1Subject3) > 100 || Number($scope.plus1Subject4) > 100 || Number($scope.plus1Subject5) > 100 || Number($scope.plus1Subject6) > 100) {
                alert('Please make sure your mark doesn\'t exceed 100');
                return;
            }

            if (Number($scope.plus2Subject1) > 30 || Number($scope.plus2Subject2) > 30 || Number($scope.plus2Subject3) > 30 || Number($scope.plus2Subject4) > 30 || Number($scope.plus2Subject5) > 30 || Number($scope.plus2Subject6) > 30) {
                alert('Please make sure your 12th mark doesn\'t exceed 30% or 30');
                return;
            }

            let calculateTotal = 0;

            let sslcMarks = [];
            sslcMarks.push(Number($scope.sslcLanguage1));
            sslcMarks.push(Number($scope.sslcLanguage2));
            sslcMarks.push(Number($scope.sslcMaths));
            sslcMarks.push(Number($scope.sslcScience));
            sslcMarks.push(Number($scope.sslcSocialScience));
            let sortedSslcMarks = sortMarks(sslcMarks);

            let averageOfTopthree = (sortedSslcMarks[0] + sortedSslcMarks[1] + sortedSslcMarks[2]) / 3;
            let fiftyPercentOfSslcAverage = averageOfTopthree / 2;
            const sslcTotalForPlusTwo = fiftyPercentOfSslcAverage * 6;
            console.log(averageOfTopthree, sslcTotalForPlusTwo);

            let plus1Markstotal = 0;

            plus1Markstotal += (((Number($scope.plus1Subject1) - 10) ) * 0.222);
            plus1Markstotal += (((Number($scope.plus1Subject2) - 10) ) * 0.222);
            plus1Markstotal += (((Number($scope.plus1Subject3) - 10 )) * 0.222);

            plus1Markstotal += (((Number($scope.plus1Subject4) - 30)) * 0.285);
            plus1Markstotal += (((Number($scope.plus1Subject5) - 30)) * 0.285);
            plus1Markstotal += (((Number($scope.plus1Subject6) - 30)) * 0.285);

            calculateTotal += (plus1Markstotal / 6) * 6;

            calculateTotal += Number($scope.plus2Subject1);
            calculateTotal += Number($scope.plus2Subject2);

            calculateTotal += Number($scope.plus2Subject3);

            calculateTotal += Number($scope.plus2Subject4);
            calculateTotal += Number($scope.plus2Subject5);

            calculateTotal += Number($scope.plus2Subject6);


            // add sslc marks
            calculateTotal += sslcTotalForPlusTwo;

            $scope.totalMarks = Math.round(calculateTotal);
        }


    });