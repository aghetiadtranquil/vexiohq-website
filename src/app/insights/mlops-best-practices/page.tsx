import { Metadata } from 'next';
import Link from 'next/link';
import { Code2, GitBranch, Activity, Database, Shield, Zap, Package, Settings, Monitor, AlertTriangle, CheckCircle, Terminal, Cloud, Cpu, BarChart3, Lock, Users, ArrowRight, Download, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'MLOps Best Practices: Enterprise Guide to Production ML | VexioHQ',
  description: 'Comprehensive technical guide to MLOps implementation. CI/CD for ML, model monitoring, versioning, and governance at enterprise scale.',
  keywords: 'MLOps best practices, ML engineering, model deployment, ML monitoring, ML pipelines, enterprise MLOps',
};

export default function MLOpsBestPractices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-400 text-green-900 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
              Technical Guide
            </div>
            <span className="text-gray-300 text-sm">Engineering Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            MLOps Best Practices:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Production ML at Scale
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            The definitive guide to building, deploying, and maintaining machine learning 
            systems in production. From experimentation to enterprise scale.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">87%</div>
              <div className="text-xs text-gray-300">Faster deployment</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">4.2x</div>
              <div className="text-xs text-gray-300">Model reliability</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">62%</div>
              <div className="text-xs text-gray-300">Cost reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-xs text-gray-300">Uptime achieved</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Guide
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              View Code Examples
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-8">Why MLOps Matters</h2>
            
            <p className="text-xl leading-relaxed mb-8">
              <strong>87% of ML projects never make it to production.</strong> The gap between 
              experimental success and production deployment remains the greatest challenge in 
              enterprise AI. MLOps bridges this gap with systematic approaches to model 
              development, deployment, and maintenance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Activity className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold mb-2">Reproducibility</h3>
                <p className="text-sm text-gray-600">
                  Version everything: code, data, models, and environments for complete reproducibility
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Zap className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold mb-2">Automation</h3>
                <p className="text-sm text-gray-600">
                  Automate training, validation, deployment, and monitoring for rapid iteration
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Shield className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-bold mb-2">Governance</h3>
                <p className="text-sm text-gray-600">
                  Ensure compliance, fairness, and explainability across all models
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MLOps Maturity Model */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">MLOps Maturity Model</h2>
          
          <div className="space-y-6">
            {[
              {
                level: 'Level 0: Manual Process',
                color: 'gray',
                characteristics: [
                  'Manual, script-driven process',
                  'No CI/CD for ML',
                  'Infrequent releases',
                  'No monitoring'
                ],
                metrics: 'Deployment: Months | Reliability: <80%'
              },
              {
                level: 'Level 1: ML Pipeline Automation',
                color: 'yellow',
                characteristics: [
                  'Automated ML pipeline',
                  'Continuous training',
                  'Model registry',
                  'Basic monitoring'
                ],
                metrics: 'Deployment: Weeks | Reliability: 85-90%'
              },
              {
                level: 'Level 2: CI/CD Pipeline Automation',
                color: 'green',
                characteristics: [
                  'Full CI/CD for ML',
                  'Automated testing',
                  'A/B testing capability',
                  'Performance monitoring'
                ],
                metrics: 'Deployment: Days | Reliability: 90-95%'
              },
              {
                level: 'Level 3: Advanced MLOps',
                color: 'blue',
                characteristics: [
                  'Feature stores',
                  'Multi-model serving',
                  'Advanced monitoring',
                  'Automated remediation'
                ],
                metrics: 'Deployment: Hours | Reliability: 95-99%'
              },
              {
                level: 'Level 4: Full Automation',
                color: 'purple',
                characteristics: [
                  'Self-healing systems',
                  'AutoML integration',
                  'Continuous optimization',
                  'Proactive scaling'
                ],
                metrics: 'Deployment: Minutes | Reliability: >99%'
              }
            ].map((level, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`h-2 ${
                  level.color === 'gray' ? 'bg-gray-500' :
                  level.color === 'yellow' ? 'bg-yellow-500' :
                  level.color === 'green' ? 'bg-green-500' :
                  level.color === 'blue' ? 'bg-blue-500' :
                  'bg-purple-500'
                }`} />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{level.level}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      level.color === 'gray' ? 'bg-gray-100 text-gray-700' :
                      level.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                      level.color === 'green' ? 'bg-green-100 text-green-700' :
                      level.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      Maturity {idx}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Characteristics</h4>
                      <ul className="space-y-2">
                        {level.characteristics.map((char, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-sm font-semibold text-gray-600 mb-2">Key Metrics</p>
                        <p className="text-sm">{level.metrics}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Components */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Core MLOps Components</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                component: 'Version Control',
                icon: <GitBranch className="w-6 h-6" />,
                tools: ['Git', 'DVC', 'MLflow'],
                practices: [
                  'Version code, data, and models',
                  'Branch-based experimentation',
                  'Immutable data lineage',
                  'Model checkpointing'
                ]
              },
              {
                component: 'CI/CD Pipelines',
                icon: <Package className="w-6 h-6" />,
                tools: ['Jenkins', 'GitLab CI', 'Tekton'],
                practices: [
                  'Automated testing',
                  'Model validation',
                  'Progressive deployment',
                  'Rollback capability'
                ]
              },
              {
                component: 'Feature Store',
                icon: <Database className="w-6 h-6" />,
                tools: ['Feast', 'Tecton', 'Hopsworks'],
                practices: [
                  'Feature versioning',
                  'Online/offline serving',
                  'Feature monitoring',
                  'Data consistency'
                ]
              },
              {
                component: 'Model Registry',
                icon: <Package className="w-6 h-6" />,
                tools: ['MLflow', 'Weights & Biases', 'ModelDB'],
                practices: [
                  'Model versioning',
                  'Metadata tracking',
                  'Approval workflows',
                  'Lineage tracking'
                ]
              },
              {
                component: 'Monitoring',
                icon: <Monitor className="w-6 h-6" />,
                tools: ['Prometheus', 'Grafana', 'Evidently'],
                practices: [
                  'Performance metrics',
                  'Data drift detection',
                  'Model drift alerts',
                  'Business KPI tracking'
                ]
              },
              {
                component: 'Infrastructure',
                icon: <Cloud className="w-6 h-6" />,
                tools: ['Kubernetes', 'Kubeflow', 'Ray'],
                practices: [
                  'Container orchestration',
                  'Auto-scaling',
                  'Resource optimization',
                  'Multi-cloud support'
                ]
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg">{item.component}</h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Popular Tools:</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tools.map((tool, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Best Practices:</p>
                  <ul className="space-y-1">
                    {item.practices.map((practice, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                        <span className="text-blue-500">•</span>
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Pipeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">End-to-End ML Pipeline</h2>
          
          <div className="bg-gray-50 rounded-2xl p-10">
            <div className="space-y-8">
              {/* Pipeline Stages */}
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />
                
                <div className="space-y-8">
                  {[
                    {
                      stage: 'Data Ingestion',
                      color: 'blue',
                      tasks: ['Data validation', 'Schema enforcement', 'Data versioning', 'Quality checks'],
                      tools: 'Apache Kafka, Airflow, dbt'
                    },
                    {
                      stage: 'Feature Engineering',
                      color: 'purple',
                      tasks: ['Feature extraction', 'Transformation', 'Feature selection', 'Storage'],
                      tools: 'Spark, Feature Store, Pandas'
                    },
                    {
                      stage: 'Model Training',
                      color: 'green',
                      tasks: ['Hyperparameter tuning', 'Distributed training', 'Experiment tracking', 'Validation'],
                      tools: 'TensorFlow, PyTorch, MLflow'
                    },
                    {
                      stage: 'Model Evaluation',
                      color: 'yellow',
                      tasks: ['Performance metrics', 'Bias detection', 'A/B testing', 'Business metrics'],
                      tools: 'TensorBoard, Weights & Biases'
                    },
                    {
                      stage: 'Model Deployment',
                      color: 'orange',
                      tasks: ['Containerization', 'API creation', 'Load balancing', 'Versioning'],
                      tools: 'Docker, Kubernetes, Seldon'
                    },
                    {
                      stage: 'Monitoring & Feedback',
                      color: 'red',
                      tasks: ['Performance monitoring', 'Drift detection', 'Alerting', 'Retraining triggers'],
                      tools: 'Prometheus, Grafana, Evidently'
                    }
                  ].map((stage, idx) => (
                    <div key={idx} className="relative flex items-start gap-8">
                      <div className={`w-16 h-16 text-white rounded-full flex items-center justify-center font-bold z-10 ${
                        stage.color === 'blue' ? 'bg-blue-600' :
                        stage.color === 'purple' ? 'bg-purple-600' :
                        stage.color === 'green' ? 'bg-green-600' :
                        stage.color === 'yellow' ? 'bg-yellow-600' :
                        stage.color === 'orange' ? 'bg-orange-600' :
                        'bg-red-600'
                      }`}>
                        {idx + 1}
                      </div>
                      <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-3">{stage.stage}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-semibold text-gray-600 mb-2">Key Tasks:</p>
                            <ul className="space-y-1 text-sm">
                              {stage.tasks.map((task, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-600 mb-2">Tools:</p>
                            <p className="text-sm text-gray-600">{stage.tools}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Implementation Examples</h2>
          
          <div className="space-y-8">
            {/* CI/CD Pipeline */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold">CI/CD Pipeline Configuration</h3>
              </div>
              
              <pre className="bg-black/50 rounded-xl p-6 overflow-x-auto">
                <code className="text-sm">{`# .gitlab-ci.yml
stages:
  - data_validation
  - feature_engineering
  - model_training
  - model_evaluation
  - model_deployment
  - monitoring

data_validation:
  stage: data_validation
  script:
    - python scripts/validate_data.py
    - dvc pull
    - great_expectations checkpoint run data_quality
  artifacts:
    reports:
      - reports/data_validation.html

model_training:
  stage: model_training
  script:
    - python src/train.py --config configs/model_config.yaml
    - mlflow run . -P epochs=100 -P batch_size=32
  artifacts:
    paths:
      - models/
      - metrics/
  only:
    - main
    - develop

model_deployment:
  stage: model_deployment
  script:
    - docker build -t model:$CI_COMMIT_SHA .
    - kubectl apply -f k8s/deployment.yaml
    - kubectl set image deployment/model model=model:$CI_COMMIT_SHA
  environment:
    name: production
    url: https://api.example.com/model
  when: manual
  only:
    - main`}</code>
              </pre>
            </div>

            {/* Monitoring Configuration */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Monitor className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold">Model Monitoring Setup</h3>
              </div>
              
              <pre className="bg-black/50 rounded-xl p-6 overflow-x-auto">
                <code className="text-sm">{`# monitoring/model_monitor.py
import numpy as np
from evidently import ColumnMapping
from evidently.report import Report
from evidently.metrics import *

class ModelMonitor:
    def __init__(self, reference_data, model_name):
        self.reference = reference_data
        self.model_name = model_name
        self.alerts = []
        
    def check_data_drift(self, current_data):
        """Check for data drift between reference and current data"""
        report = Report(metrics=[
            DataDriftTable(),
            DataQualityTable(),
            RegressionQualityMetric()
        ])
        
        report.run(
            reference_data=self.reference,
            current_data=current_data,
            column_mapping=self.column_mapping
        )
        
        drift_score = report.get_metric("DataDriftTable").drift_share
        
        if drift_score > 0.3:
            self.trigger_alert(
                severity="HIGH",
                message=f"Data drift detected: {drift_score:.2%}"
            )
            
        return report
    
    def check_performance_degradation(self, predictions, actuals):
        """Monitor model performance metrics"""
        mae = np.mean(np.abs(predictions - actuals))
        rmse = np.sqrt(np.mean((predictions - actuals)**2))
        
        if mae > self.thresholds['mae']:
            self.trigger_alert(
                severity="MEDIUM",
                message=f"MAE threshold exceeded: {mae:.3f}"
            )
            
        return {"mae": mae, "rmse": rmse}
    
    def trigger_alert(self, severity, message):
        """Send alerts to monitoring systems"""
        alert = {
            "model": self.model_name,
            "severity": severity,
            "message": message,
            "timestamp": datetime.now()
        }
        
        # Send to Prometheus AlertManager
        self.send_to_alertmanager(alert)
        
        # Log to centralized logging
        logger.error(f"Model Alert: {alert}")
        
        self.alerts.append(alert)`}</code>
              </pre>
            </div>

            {/* Feature Store Integration */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold">Feature Store Integration</h3>
              </div>
              
              <pre className="bg-black/50 rounded-xl p-6 overflow-x-auto">
                <code className="text-sm">{`# feature_store/features.py
from feast import FeatureStore, Entity, Feature, FeatureView
from feast.types import Float32, Int64, String
import pandas as pd

# Initialize feature store
store = FeatureStore(repo_path="feature_repo/")

# Define customer entity
customer = Entity(
    name="customer",
    value_type=Int64,
    description="Customer ID"
)

# Define feature views
customer_features = FeatureView(
    name="customer_features",
    entities=["customer"],
    ttl=timedelta(days=1),
    features=[
        Feature(name="total_purchases", dtype=Float32),
        Feature(name="days_since_last_purchase", dtype=Int64),
        Feature(name="customer_segment", dtype=String),
        Feature(name="lifetime_value", dtype=Float32),
    ],
    online=True,
    batch_source=BigQuerySource(
        table="project.dataset.customer_features",
        timestamp_column="event_timestamp"
    ),
    stream_source=KafkaSource(
        topic="customer_events",
        format="avro"
    )
)

# Training data retrieval
def get_training_data(entity_df, feature_refs):
    """Retrieve historical features for training"""
    training_data = store.get_historical_features(
        entity_df=entity_df,
        feature_refs=feature_refs
    ).to_df()
    
    return training_data

# Online serving
def get_online_features(customer_ids):
    """Retrieve features for real-time inference"""
    feature_vector = store.get_online_features(
        feature_refs=[
            "customer_features:total_purchases",
            "customer_features:days_since_last_purchase",
            "customer_features:customer_segment",
            "customer_features:lifetime_value"
        ],
        entity_rows=[{"customer": id} for id in customer_ids]
    )
    
    return feature_vector.to_dict()`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Best Practices Checklist */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">MLOps Best Practices Checklist</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: 'Development',
                icon: <Code2 className="w-6 h-6" />,
                practices: [
                  'Use version control for code, data, and models',
                  'Implement automated testing for data and models',
                  'Create reproducible environments with containers',
                  'Document all experiments and decisions',
                  'Use configuration files instead of hardcoding',
                  'Implement proper logging and error handling'
                ]
              },
              {
                category: 'Deployment',
                icon: <Cpu className="w-6 h-6" />,
                practices: [
                  'Containerize models for portability',
                  'Implement blue-green deployments',
                  'Use feature flags for gradual rollouts',
                  'Set up automatic rollback mechanisms',
                  'Implement request/response logging',
                  'Use load balancing for high availability'
                ]
              },
              {
                category: 'Monitoring',
                icon: <Activity className="w-6 h-6" />,
                practices: [
                  'Monitor model performance metrics',
                  'Track data and concept drift',
                  'Set up alerting for anomalies',
                  'Monitor infrastructure metrics',
                  'Track business KPIs',
                  'Implement feedback loops'
                ]
              },
              {
                category: 'Governance',
                icon: <Shield className="w-6 h-6" />,
                practices: [
                  'Implement model approval workflows',
                  'Maintain audit trails',
                  'Ensure GDPR/CCPA compliance',
                  'Test for bias and fairness',
                  'Document model decisions',
                  'Implement access controls'
                ]
              }
            ].map((category, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.practices.map((practice, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-sm">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Common Pitfalls */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Common Pitfalls & Solutions</h2>
          
          <div className="space-y-6">
            {[
              {
                pitfall: 'Training-Serving Skew',
                impact: 'Model performs differently in production than in development',
                solutions: [
                  'Use same feature pipeline for training and serving',
                  'Implement feature stores for consistency',
                  'Validate preprocessing in production',
                  'Monitor feature distributions'
                ]
              },
              {
                pitfall: 'Lack of Reproducibility',
                impact: 'Cannot recreate model results or debug issues',
                solutions: [
                  'Version everything: code, data, configs, environments',
                  'Use deterministic random seeds',
                  'Log all hyperparameters and metrics',
                  'Containerize training environments'
                ]
              },
              {
                pitfall: 'Silent Model Degradation',
                impact: 'Performance degrades without detection',
                solutions: [
                  'Implement comprehensive monitoring',
                  'Set up drift detection',
                  'Create alerting thresholds',
                  'Regular A/B testing against baseline'
                ]
              },
              {
                pitfall: 'Manual Deployment Process',
                impact: 'Slow, error-prone deployments',
                solutions: [
                  'Automate with CI/CD pipelines',
                  'Implement infrastructure as code',
                  'Use blue-green deployments',
                  'Create rollback procedures'
                ]
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="bg-red-500 h-2" />
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">{item.pitfall}</h3>
                      <p className="text-gray-600 mt-1">{item.impact}</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6 mt-4">
                    <h4 className="font-semibold mb-3 text-green-900">Solutions:</h4>
                    <ul className="space-y-2">
                      {item.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Recommended Technology Stack</h2>
          
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-10">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: 'Open Source Stack',
                  color: 'green',
                  tools: [
                    { name: 'MLflow', purpose: 'Experiment tracking' },
                    { name: 'Kubeflow', purpose: 'ML workflows' },
                    { name: 'Feast', purpose: 'Feature store' },
                    { name: 'Seldon', purpose: 'Model serving' },
                    { name: 'Prometheus', purpose: 'Monitoring' },
                    { name: 'Great Expectations', purpose: 'Data validation' }
                  ]
                },
                {
                  category: 'Cloud Native Stack',
                  color: 'blue',
                  tools: [
                    { name: 'AWS SageMaker', purpose: 'End-to-end ML' },
                    { name: 'Azure ML', purpose: 'Enterprise ML' },
                    { name: 'GCP Vertex AI', purpose: 'Unified ML' },
                    { name: 'Databricks', purpose: 'Lakehouse ML' },
                    { name: 'Snowflake ML', purpose: 'Data cloud ML' },
                    { name: 'DataRobot', purpose: 'AutoML platform' }
                  ]
                },
                {
                  category: 'Enterprise Stack',
                  color: 'purple',
                  tools: [
                    { name: 'Domino', purpose: 'MLOps platform' },
                    { name: 'Weights & Biases', purpose: 'ML DevOps' },
                    { name: 'Tecton', purpose: 'Feature platform' },
                    { name: 'Comet ML', purpose: 'ML lifecycle' },
                    { name: 'Neptune AI', purpose: 'Metadata store' },
                    { name: 'Valohai', purpose: 'ML orchestration' }
                  ]
                }
              ].map((stack, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className={`text-lg font-bold mb-4 ${
                    stack.color === 'green' ? 'text-green-700' :
                    stack.color === 'blue' ? 'text-blue-700' :
                    'text-purple-700'
                  }`}>
                    {stack.category}
                  </h3>
                  <ul className="space-y-3">
                    {stack.tools.map((tool, i) => (
                      <li key={i} className="flex justify-between items-start">
                        <span className="font-semibold text-sm">{tool.name}</span>
                        <span className="text-xs text-gray-600">{tool.purpose}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI & Metrics */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-8">MLOps ROI & Impact</h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">87%</p>
                <p className="text-green-100">Faster Deployment</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">4.2x</p>
                <p className="text-green-100">Model Reliability</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">62%</p>
                <p className="text-green-100">Cost Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">3.5x</p>
                <p className="text-green-100">Team Productivity</p>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold mb-3">Case Study: Fortune 500 Retailer</h3>
              <p>
                After implementing MLOps best practices, deployment time reduced from 
                3 months to 4 days, model accuracy improved by 23%, and operational 
                costs decreased by $2.4M annually.
              </p>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Additional Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">Documentation</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• MLOps Principles paper</li>
                <li>• Google's ML best practices</li>
                <li>• Hidden technical debt in ML</li>
                <li>• ML system design patterns</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Users className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-bold mb-2">Community</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• MLOps Community Slack</li>
                <li>• r/MachineLearning</li>
                <li>• MLOps World Conference</li>
                <li>• Local meetup groups</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Terminal className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-bold mb-2">Open Source</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Awesome MLOps repo</li>
                <li>• ML project template</li>
                <li>• Example pipelines</li>
                <li>• Benchmark datasets</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Accelerate Your MLOps Journey
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              Get expert guidance on implementing MLOps best practices. Our team helps you 
              build production-ready ML systems that scale.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/consultation"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition inline-flex items-center gap-2"
              >
                Get MLOps Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition">
                Download Full Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}